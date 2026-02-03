# Base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies (required for LightGBM)
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency file
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY app ./app
COPY credit_risk_model_production.pkl .

# Expose port (Azure uses this)
EXPOSE 8000

# Start FastAPI app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
