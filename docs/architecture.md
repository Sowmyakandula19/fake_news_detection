# AI Fake News Detection System Architecture

The project follows a standard modern full-stack application structure using a decoupled UI and REST API. 

## Frontend (React + Vite + Tailwind)
Located in `frontend/`. 
- **Routing**: `react-router-dom` connects Home, Analyzer, ImageUpload, and Admin pages.
- **State Management**: React Hooks (`useState`, `useEffect`).
- **Styling**: Tailwind CSS provides rapid UI consistency.
- **API Calls**: Axios (`src/api/api.js`) handles multipart form data for file uploads and standard JSON POST requests to the FastAPI backend.

## Backend (FastAPI + Python)
Located in `backend/`.
- **API Framework**: FastAPI is chosen for high performance, async support, and auto-generated OpenAPI documentation.
- **Routing**: `main.py` includes routers for Text, Image, URL, and Combined analyses.
- **Services**: `services/` contains the simulated ML models. In production, these scripts load pre-trained `.pkl` or `.h5` files into memory for inference.

## Deployment (Docker)
- `Dockerfile.frontend`: Multi-stage build for React -> statically served via `serve` on port 3000.
- `Dockerfile.backend`: Python slim image installing heavy AI dependencies (Torch, Scikit-learn, OpenCV) and running Uvicorn on port 8000.
- `docker-compose.yml`: Spins up both containers simultaneously and manages network requests between them.

## Future ML Pipeline
1. Run `python notebooks/data_analysis.ipynb` to clean dataset.
2. Run `python training/train_text_model.py` to train TF-IDF + Logistic Regression/BERT on `FakeNewsNet`.
3. Load artifacts into `backend/services/text_detector.py`.
