from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import text_routes, image_routes, url_routes, combined_routes

app = FastAPI(
    title="AI Fake News Detection System API",
    description="API for evaluating news articles, images, and URLs for authenticity.",
    version="1.0.0"
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for production deployment ease
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(text_routes.router)
app.include_router(image_routes.router)
app.include_router(url_routes.router)
app.include_router(combined_routes.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Fake News Detection API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
