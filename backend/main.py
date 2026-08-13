from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import tasks_collection


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------
# CREATE TASK
# -------------------------

@app.post("/tasks")
def create_task(task: dict):

    tasks_collection.insert_one(task)

    # Never send MongoDB's internal _id to React
    task.pop("_id", None)

    return task


# -------------------------
# GET TASKS
# -------------------------

@app.get("/tasks")
def get_tasks():

    tasks = list(
        tasks_collection.find(
            {},
            {"_id": 0}
        )
    )

    return tasks


# -------------------------
# UPDATE TASK
# -------------------------

@app.put("/tasks/{task_id}")
def update_task(task_id: int, updated_task: dict):

    result = tasks_collection.update_one(
        {"id": task_id},
        {"$set": updated_task}
    )

    if result.matched_count == 0:
        return {"error": "Task not found"}

    updated_task.pop("_id", None)

    return updated_task