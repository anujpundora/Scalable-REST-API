from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.user import User
from app.dependencies.auth_guard import admin_required
from app.models.task import Task

router = APIRouter(prefix="/api/v1/admin", tags=["Admin"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/users")
def get_users(db: Session = Depends(get_db), user=Depends(admin_required)):
    return db.query(User).all()

@router.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db), user=Depends(admin_required)):

    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        return {"error": "User not found"}

    db.delete(user)
    db.commit()

    return {"message": "User deleted"}


@router.get("/users/{user_id}/tasks")
def get_user_tasks(user_id: int, db: Session = Depends(get_db), user=Depends(admin_required)):

    return db.query(Task).filter(Task.owner_id == user_id).all()