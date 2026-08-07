from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



tasks = []

@app.post("/tasks")
def create_task(task: dict):
    tasks.append(task)
    return task


@app.get("/tasks")
def get_tasks():
    return tasks

@app.put("/tasks/{task_id}")
def update_task(task_id: int, updated_task: dict):
    for i, task in enumerate(tasks):
        if task["id"] == task_id:
            tasks[i] = updated_task
            return updated_task

    return {"error": "Task not found"}