from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "Welcome" in response.json()["message"]

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"

def test_analyze_text():
    response = client.post("/api/text/analyze", json={"text": "This is a sample news article."})
    assert response.status_code == 200
    assert "prediction" in response.json()

def test_analyze_url():
    response = client.post("/api/url/analyze", json={"url": "https://bbc.com"})
    assert response.status_code == 200
    assert response.json()["prediction"] == "REAL NEWS"
