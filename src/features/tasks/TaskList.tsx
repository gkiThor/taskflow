import type { Task } from "./model";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: Task[];
  onDelete: (id: string) => void;
};

export function TaskList({ tasks, onDelete }: Props) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-600">
        Aucune tâche pour le moment.
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onDelete={onDelete} />
      ))}
    </ul>
  );
}
