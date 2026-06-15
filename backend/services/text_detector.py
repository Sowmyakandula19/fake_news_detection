import re
import math
import random

class TextDetector:
    def __init__(self):
        # In a real app, load models here: e.g. pipeline('text-classification', model='...')
        # For this prototype we will use a mock scoring engine with basic keyword counting.
        self.suspicious_keywords = [
            "shocking truth", "miracle cure", "you won't believe", 
            "secret reveals", "mind control", "hidden agenda",
            "fake news", "illuminati", "is a theif", "is a thief",
            "is dead", "is fake"
        ]

    def analyze_text(self, text: str) -> dict:
        text_lower = text.lower()
        score = 0.0
        
        words = text.split()
        word_count = len(words)
        
        # Simple heuristic: Real news usually has substantial context and length.
        # Short, blunt statements without sources are often suspicious or rumors.
        if word_count < 10:
            score += 45.0  # Big penalty for very short, uncorroborated text
        elif word_count < 30:
            score += 20.0
            
        # Keyword detection
        for kw in self.suspicious_keywords:
            if kw in text_lower:
                score += 25.0  # 25% bump per suspicious keyword

        # Capitalization check (all caps words)
        all_caps = [w for w in words if w.isupper() and len(w) > 3]
        if len(words) > 0:
            caps_ratio = len(all_caps) / len(words)
            if caps_ratio > 0.05:
                score += min(30.0, caps_ratio * 100 * 2) # max 30 penalty for excessive caps
        
        # Base randomness to simulate ML variance (0 to 10)
        score += random.uniform(0, 10.0)

        # Cap score
        final_score = min(99.9, max(0.1, score))
        
        # Binary Classification
        if final_score < 40:
            prediction = "REAL NEWS"
            explanation = "The text appears balanced, detailed, and does not contain significant clickbait markers."
        else:
            prediction = "FAKE NEWS"
            explanation = "High probability of misinformation. The text is highly sensational, extremely brief, or matches known manipulation patterns."

        return {
            "prediction": prediction,
            "fake_probability_score": round(final_score, 2),
            "explanation": explanation
        }

text_detector = TextDetector()
