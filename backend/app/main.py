from fastapi import FastAPI
from app.database import Base, engine
from app.models import user, task
from app.routes import auth_routes
from app.routes import task_routes

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Scalable REST API",
    version="1.0"
)

app.include_router(task_routes.router)
app.include_router(auth_routes.router)

@app.get("/")
def root():
    return {"message": "API is running"}
