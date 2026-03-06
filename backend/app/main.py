from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models import user, task
from app.routes import auth_routes, task_routes, admin_routes

app = FastAPI()

# CORS must come BEFORE routers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(auth_routes.router)
app.include_router(task_routes.router)
app.include_router(admin_routes.router)

@app.get("/")
def root():
    return {"message": "API running"}