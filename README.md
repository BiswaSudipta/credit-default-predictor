# 🚀 Credit Default Predictor

### 🔍 Predict Credit Default Risk Using Machine Learning

🌐 **Live Application (Vercel)**
👉 **[https://credit-default-predictor.vercel.app/](https://credit-default-predictor.vercel.app/)**

---

## 🎥 Demo

<p align="center">
  <img src="Demo.png" alt="Credit Default Predictor Demo" width="90%">
</p>

---

## 🧠 What is this project?

**Credit Default Predictor** is a **full-stack machine learning web application** that predicts whether a customer is likely to **default on credit payments**.

The project is designed to **simulate real-world credit risk assessment systems** used by banks and financial institutions, combining:

* A **robust ML classification model**
* A **FastAPI-powered backend**
* A **modern React (Vite) frontend**
* **Cloud deployment** with Docker support

The goal is to provide **fast, interpretable, and production-ready credit risk predictions**.

---

## ✨ Key Features

* 🏦 **Credit default risk prediction**
* 🤖 **Machine Learning–powered classification**
* ⚡ **Real-time prediction via REST API**
* 🖥️ **Modern React + Vite frontend**
* 🔗 **Frontend–backend integration**
* 🐳 **Dockerized backend**
* ☁️ **Cloud-deployed frontend**
* 📱 **Responsive UI**
* 🧩 **Clean, modular project structure**

---

## 🛠️ Tech Stack

### Frontend <p> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8"/> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/> </p> 
### Backend & ML <p> <img src="https://img.shields.io/badge/Microsoft_Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white"/> <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"/> <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white"/> <img src="https://img.shields.io/badge/LightGBM-2C2C2C?style=for-the-badge"/> <img src="https://img.shields.io/badge/Docker-0DB7ED?style=for-the-badge&logo=docker&logoColor=white"/> </p> 
### Tools & Platform <p> <img src="https://img.shields.io/badge/Google_Colab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=white"/> <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github"/> </p>

---

## 📊 Problem Statement

Financial institutions face significant losses due to **loan defaults**.
Manual evaluation is slow, inconsistent, and prone to bias.

This project solves that by:

* Using **historical customer data**
* Applying **machine learning classification**
* Producing **instant credit risk predictions**

---

## 🧠 Modeling Approach

* Supervised **classification model**
* Trained on structured credit data
* Outputs a **binary prediction**:

  * `0` → No Default
  * `1` → Likely Default

The model is optimized for:

* Accuracy
* Generalization
* Real-time inference

---


## 📂 Project Structure

```text
credit-default-predictor/
│
├── app/
│   ├── main.py
│   ├── model.pkl
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   └── credit-default-predictor/
│       ├── public/
│       ├── src/
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       ├── vite.config.js
│       └── eslint.config.js
│
├── Demo.png
├── README.md
├── LICENSE
└── .gitignore
```

---

## ⚙️ Run Locally

### Backend (FastAPI)

```bash
cd app
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend (React + Vite)

```bash
cd frontend/credit-default-predictor
npm install
npm run dev
```

---

## 🐳 Run with Docker

```bash
docker build -t credit-default-predictor .
docker run -p 8000:8000 credit-default-predictor
```

---

## 🎯 Use Cases

* Bank loan approval systems
* Credit risk assessment
* Financial decision support tools
* FinTech applications
* ML portfolio projects

---

## 📄 License

This project is licensed under the **MIT License**.

---

### ⭐ If you find this project useful, give it a star — it really helps!
