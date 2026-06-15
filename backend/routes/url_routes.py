from fastapi import APIRouter
from pydantic import BaseModel
from services.url_analyzer import url_analyzer

router = APIRouter(prefix="/api/url", tags=["URL Analysis"])

class URLRequest(BaseModel):
    url: str

@router.post("/analyze")
async def analyze_url(request: URLRequest):
    result = url_analyzer.analyze_url(request.url)
    return result
