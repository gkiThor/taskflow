import { useState } from "react";
import { TaskForm } from "./features/tasks/TaskForm";
import { TaskList } from "./features/tasks/TaskList";
import type { Task } from "./features/tasks/model";
import { createTask } from "./features/tasks/model";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="min-h-dvh bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">TaskFlow</h1>
            <p className="text-sm text-slate-600">Todo app (React + TS + Tailwind)</p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
            {tasks.length} tâche(s)
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-6 px-4 py-6">
        <TaskForm
          onCreate={(data) => {
            const task = createTask(data);
            setTasks((prev) => [task, ...prev]);
          }}
        />

        <TaskList
          tasks={tasks}
          onDelete={(id) => setTasks((prev) => prev.filter((t) => t.id !== id))}
        />
      </main>
    </div>
  );
}
