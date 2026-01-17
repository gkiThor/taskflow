import type { Task } from "./model";
import { Button } from "../../components/ui/Button";    

type Props = {
    task: Task;
    onDelete: (id: string) => void;
};

export function TaskItem({ task, onDelete }: Props) {
    return (
        <li className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="min-w-0">
                <p className="truncate font-medium text-slate-900">{task.title}</p>
                <p className="text-sm text-slate-600">
                Statut: {task.status} · Priorité: {task.priority}
                </p>
            </div>
            <Button variant="danger" onClick={() => onDelete(task.id)}>
                Supprimer
            </Button>
        </li>   
    );
}