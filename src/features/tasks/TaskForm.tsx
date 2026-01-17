import { useState } from 'react';
import type { TaskPriority, TaskStatus } from './model';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';

type Props = {
    onCreate: (data: { title: string; status: TaskStatus; priority: TaskPriority }) => void;
};

export function TaskForm({ onCreate }: Props) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState<TaskStatus>("todo");
    const [priority, setPriority] = useState<TaskPriority>("medium");
    const [error, setError] = useState<string | null>(null);    
    

    function submit(e: React.FormEvent) {
        e.preventDefault();
        const trimmed = title.trim();
        if (!trimmed) {
            setError("Le titre est obligatoire.");
            return;
        }
        setError(null);
        onCreate({ title: trimmed, status, priority });
        setTitle("");
        setStatus("todo");
        setPriority("medium");
    }

    return (
        <form onSubmit={submit} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-900" htmlFor="title">
                Nouvelle tâche
                </label>
                <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Préparer mon CV React"
                aria-invalid={!!error}
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                <label className="text-sm font-medium text-slate-900" htmlFor="status">
                    Statut
                </label>
                <Select id="status" value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                    <option value="todo">À faire</option>
                    <option value="doing">En cours</option>
                    <option value="done">Fait</option>
                </Select>
                </div>

                <div className="space-y-1">
                <label className="text-sm font-medium text-slate-900" htmlFor="priority">
                    Priorité
                </label>
                <Select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as TaskPriority)}
                >
                    <option value="low">Basse</option>
                    <option value="medium">Moyenne</option>
                    <option value="high">Haute</option>
                </Select>
                </div>
            </div>

            <div className="flex justify-end">
                <Button type="submit">Ajouter</Button>
            </div>
        </form>
    );
}