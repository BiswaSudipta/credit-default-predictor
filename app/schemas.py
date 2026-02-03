from pydantic import BaseModel

class CreditRequest(BaseModel):
    age: int
    gender: str
    marital_status: str
    employment_type: str
    employment_years: int
    annual_income: float
    loan_amount: float
    loan_tenure_months: int
    loan_purpose: str
    residence_type: str
    city_tier: str
    credit_score: float
    num_open_loans: int
    num_past_defaults: int
    credit_history_years: int
    enquiries_last_6m: int
    avg_dpd: int
    credit_utilization_ratio: float
    total_txn_count: int
    avg_txn_amount: float
    txn_amount_std: float
    total_debit_amount: float
    delayed_payment_count: int
    avg_account_balance: float
