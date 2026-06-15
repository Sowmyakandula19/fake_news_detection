from services.text_detector import text_detector
from services.image_detector import image_detector
from services.url_analyzer import url_analyzer

def test_text_detector():
    res1 = text_detector.analyze_text("Normal balanced news string here.")
    assert "fake_probability_score" in res1
    
    res2 = text_detector.analyze_text("10 SHOCKING SECRETS THEY DONT WANT YOU TO KNOW FAKE NEWS")
    assert res2["fake_probability_score"] > res1["fake_probability_score"]

def test_url_analyzer():
    res_good = url_analyzer.analyze_url("https://bbc.com/news")
    assert res_good["prediction"] == "REAL NEWS"

    res_bad = url_analyzer.analyze_url("http://infowars.com/conspiracy")
    assert res_bad["prediction"] == "FAKE NEWS"

    res_unknown = url_analyzer.analyze_url("https://unknown-random-blog-123.com")
    assert res_unknown["prediction"] == "SUSPICIOUS NEWS"

def test_image_detector_mock():
    # Pass a tiny empty byte string
    res = image_detector.analyze_image(b"mock_byte_data")
    assert "prediction" in res
    assert 0 <= res["fake_probability_score"] <= 100
