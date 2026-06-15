# AI Fake News Detection API Documentation

FastAPI provides an automatic Swagger UI at `http://localhost:8000/docs`. Below is a summary of the core endpoints.

## Endpoints

### 1. Root and Health
- `GET /` - Root welcome message.
- `GET /health` - Health check status.

### 2. Text Analysis
- `POST /api/text/analyze`
  - **Body**: `{"text": "News article content here..."}` 
  - **Description**: Evaluates text for misinformation keywords, clickbait markers, and styling anomalies.
  - **Response**: JSON `{"prediction": "...", "fake_probability_score": 0.0, "explanation": "..."}`

### 3. Image Analysis
- `POST /api/image/analyze`
  - **Body**: `multipart/form-data` with key `file` containing an image.
  - **Description**: Uses CV heuristics to determine manipulation likelihood.
  - **Response**: JSON `{"prediction": "...", "fake_probability_score": 0.0, "explanation": "..."}`

### 4. URL Analysis
- `POST /api/url/analyze`
  - **Body**: `{"url": "https://example.com"}`
  - **Description**: Validates the domain against trusted/untrusted whitelists.
  - **Response**: JSON `{"prediction": "...", "fake_probability_score": 0.0, "domain": "example.com", "explanation": "..."}`

### 5. Combined Multi-modal Analysis
- `POST /api/combined/analyze`
  - **Body**: `multipart/form-data` accepting `text` (string), `url` (string), and `image` (file).
  - **Description**: Runs independent detectors for all provided inputs and aggregates the score into a final credibility rating.
  - **Response**: JSON `{"final_prediction": "...", "combined_confidence_score": 0.0, "explanation": "...", "detailed_results": {...}}`
