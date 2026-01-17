export type TaskStatus = "todo" | "doing" | "done";
export type TaskPriority = "low" | "medium" | "high";

export type Task = {
    id: string;
    title: string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: number;
}

export function createTask(input: {
    title: string;
    status: TaskStatus;
    priority: TaskPriority;
}): Task {
    return {
        id: crypto.randomUUID(),
        title: input.title.trim(),
        status: input.status,
        priority: input.priority,
        createdAt: Date.now(),
    };
}