from typing import Optional
from fastapi import APIRouter, Form, File, UploadFile
from services.text_detector import text_detector
from services.image_detector import image_detector
from services.url_analyzer import url_analyzer

router = APIRouter(prefix="/api/combined", tags=["Combined Analysis"])

@router.post("/analyze")
async def analyze_combined(
    text: str = Form(None),
    url: str = Form(None),
    image: UploadFile = File(None)
):
    results = {}
    total_score = 0.0
    components = 0

    if text:
        text_res = text_detector.analyze_text(text)
        results["text"] = text_res
        total_score += text_res["fake_probability_score"]
        components += 1

    if url:
        url_res = url_analyzer.analyze_url(url)
        results["url"] = url_res
        total_score += url_res["fake_probability_score"]
        components += 1

    if image:
        contents = await image.read()
        img_res = image_detector.analyze_image(contents)
        results["image"] = img_res
        total_score += img_res["fake_probability_score"]
        components += 1

    if components == 0:
        return {"error": "No input provided for analysis"}

    avg_score = total_score / components

    if avg_score < 40:
        prediction = "REAL NEWS"
        explanation = "Overall, the provided information appears credible."
    else:
        prediction = "FAKE NEWS"
        explanation = "Overall, the system predicts a high probability of misinformation based on the provided inputs."

    return {
        "final_prediction": prediction,
        "combined_confidence_score": round(avg_score, 2),
        "explanation": explanation,
        "detailed_results": results
    }
