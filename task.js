class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            text: task,
            completed: false
        });
    }
}