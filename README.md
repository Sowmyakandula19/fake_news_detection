# AI Fake News Detection System 🕵️‍♂️📰

A modern, full-stack application leveraging NLP and Computer Vision techniques to identify fake news, manipulated imagery, and untrustworthy sources. Built as a comprehensive final-year engineering project prototype.

## Features
- **Multi-modal Analysis**: Text parsing, URL credibility scoring, and image forensics.
- **FastAPI Backend**: Asynchronous API serving machine learning proxy logic.
- **React Frontend**: Beautiful, responsive dashboard built with Vite and Tailwind CSS.
- **Dockerized**: Ready for immediate cloud deployment.
- **Admin Dashboard**: Aggregates usage metrics and identifies widespread anomalies.

## Prerequisites
- Docker & Docker Compose
- Node.js (for local frontend dev)
- Python 3.10+ (for local backend dev)

## Quick Start (Docker)
1. Clone the repository and navigate to `fake-news-detection-ai`.
2. Run the deployment sequence:
   ```bash
   docker-compose build
   docker-compose up
   ```
3. Open `http://localhost:3000` to view the platform.
4. FastAPI Server is running at `http://localhost:8000`. API docs available at `http://localhost:8000/docs`.

## Local Development
### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Folder Structure
- `frontend/`: React Vite app.
- `backend/`: FastAPI application code.
- `datasets/`: Place original datasets (LIAR, FakeNewsNet) here.
- `training/`: Scaffolding scripts for re-training NLP/CV models.
- `docs/`: Extensive project documentation.

## License
MIT License.
