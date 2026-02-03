from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import CreditRequest
from app.model import predict_risk

app = FastAPI(
    title="Credit Risk Scoring API",
    version="1.0"
)

# ✅ CORS CONFIGURATION
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",          # React local
        "https://your-vercel-app.vercel.app"  # Production frontend
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Credit Risk API is running"}

@app.post("/predict")
def predict(request: CreditRequest):
    return predict_risk(request.dict())
