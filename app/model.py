import pandas as pd
import joblib

# Load model
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "credit_risk_model_production.pkl")

bundle = joblib.load(MODEL_PATH)
model = bundle["model"]
features = bundle["features"]

def predict_risk(data: dict):
    df = pd.DataFrame([data])

    # ===== Feature Engineering (same as training) =====
    df["loan_to_income"] = df["loan_amount"] / (df["annual_income"] + 1)
    df["emi"] = df["loan_amount"] / (df["loan_tenure_months"] + 1)
    df["emi_to_income"] = df["emi"] / (df["annual_income"] / 12 + 1)

    df["credit_pressure"] = df["credit_utilization_ratio"] * (df["num_open_loans"] + 1)
    df["repeat_defaulter_flag"] = (df["num_past_defaults"] > 0).astype(int)
    df["thin_credit_file"] = (df["credit_history_years"] < 3).astype(int)

    df["delinquency_pressure"] = df["avg_dpd"] * (df["delayed_payment_count"] + 1)
    df["txn_instability"] = df["txn_amount_std"] / (df["avg_txn_amount"] + 1)
    df["debit_to_income"] = df["total_debit_amount"] / (df["annual_income"] + 1)

    df["high_utilization_flag"] = (df["credit_utilization_ratio"] > 0.85).astype(int)
    df["frequent_enquiry_flag"] = (df["enquiries_last_6m"] > 10).astype(int)

    # One-hot encoding
    df = pd.get_dummies(df)
    df = df.reindex(columns=features, fill_value=0)

    # Prediction
    prob = model.predict_proba(df)[0][1]

    return {
        "probability_of_default": round(prob, 4),
        "predicted_default": int(prob >= 0.5),
        "credit_risk_score": int(900 - prob * 600)
    }
