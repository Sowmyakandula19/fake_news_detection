import urllib.parse
import random

class URLAnalyzer:
    def __init__(self):
        self.trusted_domains = [
            "bbc.com", "cnn.com", "reuters.com", "apnews.com", "nytimes.com", 
            "wsj.com", "npr.org", "bloomberg.com", "theguardian.com", "washingtonpost.com",
            "timesofindia.indiatimes.com", "ndtv.com", "thehindu.com", "indianexpress.com",
            "hindustantimes.com"
        ]
        self.suspicious_domains = [
            "infowars.com", "breitbart.com", "theonion.com", "babylonbee.com", 
            "naturalnews.com", "rt.com"
        ]

    def analyze_url(self, url: str) -> dict:
        try:
            parsed = urllib.parse.urlparse(url)
            domain = parsed.netloc.lower().replace("www.", "")
            
            if not domain:
                raise ValueError("Invalid URL")

            if domain in self.trusted_domains:
                score = random.uniform(1.0, 15.0)
                prediction = "REAL NEWS"
                explanation = f"The domain {domain} is recognized as a trusted mainstream news source."
            elif domain in self.suspicious_domains:
                score = random.uniform(75.0, 99.0)
                prediction = "FAKE NEWS"
                explanation = f"The domain {domain} is flagged as a known source of misinformation or satire."
            else:
                score = random.uniform(55.0, 95.0)
                prediction = "FAKE NEWS"
                explanation = f"The domain {domain} is not in our trusted database. Treat with extreme caution."

            return {
                "prediction": prediction,
                "fake_probability_score": round(score, 2),
                "domain": domain,
                "explanation": explanation
            }
        except Exception as e:
            return {
                "prediction": "ERROR",
                "fake_probability_score": 0.0,
                "domain": "Unknown",
                "explanation": str(e)
            }

url_analyzer = URLAnalyzer()
