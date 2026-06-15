# Utilities implementation stub for the Fake News Detection project
# This can include components like text preprocessors.

def clean_text(text: str) -> str:
    """Removes special characters and standardizes text layout."""
    import re
    text = text.lower()
    text = re.sub(r'<[^>]*>', '', text)  # remove HTML tags
    text = re.sub(r'[^a-zA-Z\s]', '', text)  # remove punctuation
    return text.strip()
