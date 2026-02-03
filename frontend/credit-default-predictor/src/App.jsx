import React, { useState } from 'react';
import { 
  ShieldCheck, 
  User, 
  Briefcase, 
  Landmark, 
  CreditCard, 
  Activity, 
  Zap, 
  AlertCircle,
  CheckCircle2,
  XCircle,
  ChevronRight
} from 'lucide-react';

const App = () => {
  // Exact field mapping required by your backend
  const [formData, setFormData] = useState({
    age: 32,
    gender: "Male",
    marital_status: "Married",
    employment_type: "Salaried",
    employment_years: 6,
    annual_income: 600000,
    loan_amount: 50000,
    loan_tenure_months: 36,
    loan_purpose: "Personal",
    residence_type: "Owned",
    city_tier: "Tier_1",
    credit_score: 742,
    num_open_loans: 3,
    num_past_defaults: 0,
    credit_history_years: 5,
    enquiries_last_6m: 2,
    avg_dpd: 5,
    credit_utilization_ratio: 0.38,
    total_txn_count: 420,
    avg_txn_amount: 2800,
    txn_amount_std: 1900,
    total_debit_amount: 920000,
    delayed_payment_count: 1,
    avg_account_balance: 125000
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("https://creditriskdefault-gtfvhjf0d5geggdj.southeastasia-01.azurewebsites.net/predict", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Connection failed. Please check CORS in Azure.');
      
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* Injecting CSS directly for single-file portability */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --bg-dark: #0f172a;
          --bg-card: rgba(30, 41, 59, 0.7);
          --bg-card-hover: rgba(30, 41, 59, 0.9);
          --primary: #6366f1; /* Indigo */
          --primary-glow: rgba(99, 102, 241, 0.4);
          --accent: #8b5cf6;  /* Violet */
          --text-main: #f8fafc;
          --text-muted: #94a3b8;
          --border: rgba(148, 163, 184, 0.1);
          --success: #10b981;
          --danger: #ef4444;
          --radius: 12px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-dark);
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 20%);
          color: var(--text-main);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        .app-container { max-width: 1280px; margin: 0 auto; padding: 2rem; }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 2fr 1fr;
            align-items: start;
          }
        }

        /* --- Cards --- */
        .glass-card {
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }

        /* --- Form Elements --- */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .modern-input, .modern-select {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border);
          color: var(--text-main);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.2s;
          width: 100%;
        }

        .modern-input:focus, .modern-select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
          background: rgba(15, 23, 42, 0.9);
        }

        /* --- Button --- */
        .submit-btn {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          width: 100%;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -10px var(--primary-glow);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        /* --- Result Panel --- */
        .result-sticky { position: sticky; top: 2rem; }

        .score-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          font-weight: 700;
          border: 4px solid;
          background: rgba(0,0,0,0.2);
        }

        .status-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .status-safe { color: var(--success); border-color: var(--success); }
        .bg-safe { background: rgba(16, 185, 129, 0.1); color: var(--success); }

        .status-risk { color: var(--danger); border-color: var(--danger); }
        .bg-risk { background: rgba(239, 68, 68, 0.1); color: var(--danger); }

        .fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* --- HEADER --- */}
      <header className="mb-8 flex items-center gap-4">
        {/* CHANGED: Points to /logo.png now */}
        <div style={{ filter: 'drop-shadow(0 4px 6px rgba(99, 102, 241, 0.3))' }}>
          <img 
            src="/logo.png" 
            alt="CreditGuard Logo" 
            style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.style.display = 'none'; // Hide if image fails to load
            }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Credit Default Predictor</h1>
          <p style={{ color: 'var(--text-muted)' }}>AI-Powered Risk Assessment Model</p>
        </div>
      </header>

      <div className="dashboard-grid">
        
        {/* --- LEFT: FORM AREA --- */}
        <div className="form-area">
          <form onSubmit={handleSubmit}>
            
            {/* 1. Personal Info */}
            <div className="glass-card mb-6">
              <h3 className="section-title"><User size={20} /> Personal Profile</h3>
              <div className="form-grid">
                <Input label="Age" name="age" type="number" val={formData.age} onChange={handleChange} />
                <Select label="Gender" name="gender" val={formData.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
                <Select label="Marital Status" name="marital_status" val={formData.marital_status} onChange={handleChange} options={["Married", "Single", "Divorced"]} />
                <Select label="Residence Type" name="residence_type" val={formData.residence_type} onChange={handleChange} options={["Owned", "Rented", "Mortgage"]} />
                <Select label="City Tier" name="city_tier" val={formData.city_tier} onChange={handleChange} options={["Tier_1", "Tier_2", "Tier_3"]} />
              </div>
            </div>

            {/* 2. Employment */}
            <div className="glass-card mb-6">
              <h3 className="section-title"><Briefcase size={20} /> Employment & Income</h3>
              <div className="form-grid">
                <Select label="Employment Type" name="employment_type" val={formData.employment_type} onChange={handleChange} options={["Salaried", "Self_Employed", "Business"]} />
                <Input label="Experience (Yrs)" name="employment_years" type="number" val={formData.employment_years} onChange={handleChange} />
                <Input label="Annual Income" name="annual_income" type="number" val={formData.annual_income} onChange={handleChange} />
              </div>
            </div>

            {/* 3. Loan Details */}
            <div className="glass-card mb-6">
              <h3 className="section-title"><Landmark size={20} /> Loan Details</h3>
              <div className="form-grid">
                <Input label="Loan Amount" name="loan_amount" type="number" val={formData.loan_amount} onChange={handleChange} />
                <Input label="Tenure (Months)" name="loan_tenure_months" type="number" val={formData.loan_tenure_months} onChange={handleChange} />
                <Select label="Purpose" name="loan_purpose" val={formData.loan_purpose} onChange={handleChange} options={["Personal", "Education", "Home", "Auto", "Business"]} />
              </div>
            </div>

            {/* 4. Credit Profile */}
            <div className="glass-card mb-6">
              <h3 className="section-title"><CreditCard size={20} /> Credit History</h3>
              <div className="form-grid">
                <Input label="Credit Score" name="credit_score" type="number" val={formData.credit_score} onChange={handleChange} />
                <Input label="Open Loans" name="num_open_loans" type="number" val={formData.num_open_loans} onChange={handleChange} />
                <Input label="Past Defaults" name="num_past_defaults" type="number" val={formData.num_past_defaults} onChange={handleChange} />
                <Input label="Credit History (Yrs)" name="credit_history_years" type="number" val={formData.credit_history_years} onChange={handleChange} />
                <Input label="Enquiries (6m)" name="enquiries_last_6m" type="number" val={formData.enquiries_last_6m} onChange={handleChange} />
                <Input label="Avg DPD" name="avg_dpd" type="number" val={formData.avg_dpd} onChange={handleChange} />
                <Input label="Credit Utilization" name="credit_utilization_ratio" type="number" step="0.01" val={formData.credit_utilization_ratio} onChange={handleChange} />
              </div>
            </div>

             {/* 5. Transactions */}
             <div className="glass-card">
              <h3 className="section-title"><Activity size={20} /> Transaction Behavior</h3>
              <div className="form-grid">
                <Input label="Total Txn Count" name="total_txn_count" type="number" val={formData.total_txn_count} onChange={handleChange} />
                <Input label="Avg Txn Amount" name="avg_txn_amount" type="number" val={formData.avg_txn_amount} onChange={handleChange} />
                <Input label="Txn Std Dev" name="txn_amount_std" type="number" val={formData.txn_amount_std} onChange={handleChange} />
                <Input label="Total Debit" name="total_debit_amount" type="number" val={formData.total_debit_amount} onChange={handleChange} />
                <Input label="Delayed Payments" name="delayed_payment_count" type="number" val={formData.delayed_payment_count} onChange={handleChange} />
                <Input label="Avg Balance" name="avg_account_balance" type="number" val={formData.avg_account_balance} onChange={handleChange} />
              </div>
              
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Analyzing Profile..." : <>Run Prediction Model <Zap size={18} /></>}
              </button>
            </div>

          </form>
        </div>

        {/* --- RIGHT: RESULT AREA --- */}
        <div className="result-area result-sticky">
          <div className="glass-card" style={{ textAlign: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 className="section-title" style={{ justifyContent: 'center', border: 'none', marginBottom: '2rem' }}>Analysis Report</h3>
            
            {!result && !error && (
              <div style={{ color: 'var(--text-muted)' }}>
                <Activity size={48} style={{ opacity: 0.2, margin: '0 auto 1rem' }} />
                <p>Fill out the application details to generate a credit risk score.</p>
              </div>
            )}

            {error && (
              <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', marginTop: '1rem' }}>
                <AlertCircle size={32} color="var(--danger)" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ color: 'var(--danger)', fontSize: '0.9rem' }}>{error}</p>
              </div>
            )}

            {result && (
              <div className="fade-in">
                {/* Score visualization */}
                <div className={`score-circle ${result.predicted_default === 1 ? 'status-risk' : 'status-safe'}`}>
                  {result.credit_risk_score}
                </div>

                <div className={`status-badge ${result.predicted_default === 1 ? 'bg-risk' : 'bg-safe'}`}>
                  {result.predicted_default === 1 ? "HIGH RISK DETECTED" : "LOW RISK APPROVED"}
                </div>

                {/* Outcome Message */}
                {result.predicted_default === 1 ? (
                  <div>
                    <XCircle size={48} color="var(--danger)" style={{ margin: '0 auto 1rem' }} />
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Application Rejected</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      Model predicts a high probability of default ({result.probability_of_default?.toFixed(4)}).
                    </p>
                  </div>
                ) : (
                  <div>
                    <CheckCircle2 size={48} color="var(--success)" style={{ margin: '0 auto 1rem' }} />
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Application Approved</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      Applicant demonstrates healthy financial behavior. Default probability: {result.probability_of_default?.toFixed(4)}.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Helper Components ---

const Input = ({ label, name, type, val, onChange, step }) => (
  <div className="input-group">
    <label className="input-label">{label}</label>
    <input 
      className="modern-input" 
      type={type} 
      name={name} 
      value={val} 
      onChange={onChange} 
      step={step}
      required 
    />
  </div>
);

const Select = ({ label, name, val, onChange, options }) => (
  <div className="input-group">
    <label className="input-label">{label}</label>
    <select className="modern-select" name={name} value={val} onChange={onChange}>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export default App;