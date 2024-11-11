class TaskManager {
    constructor() {
        this.taskList = [];
    }

    createTask(taskText) {
        this.taskList.push({
            id: Date.now(),
            content: taskText,
            isDone: false
        });
    }
}