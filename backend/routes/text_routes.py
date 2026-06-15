from fastapi import APIRouter
from pydantic import BaseModel
from services.text_detector import text_detector

router = APIRouter(prefix="/api/text", tags=["Text Analysis"])

class TextRequest(BaseModel):
    text: str

@router.post("/analyze")
async def analyze_text(request: TextRequest):
    result = text_detector.analyze_text(request.text)
    return result
