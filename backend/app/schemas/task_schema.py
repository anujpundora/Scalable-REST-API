from pydantic import BaseModel
from pydantic import BaseModel


class TaskCreate(BaseModel):
    title: str
    description: str


class TaskCreate(BaseModel):
    title: str
    description: str


class TaskUpdate(BaseModel):
    title: str
    description: str