from fastapi import APIRouter, File, UploadFile
from fastapi.responses import JSONResponse
from services.image_detector import image_detector

router = APIRouter(prefix="/api/image", tags=["Image Analysis"])

@router.post("/analyze")
async def analyze_image(file: UploadFile = File(...)):
    contents = await file.read()
    result = image_detector.analyze_image(contents)
    return result
