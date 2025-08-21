import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TaskCard from "./TaskCard";
import { mockTasks, mockComments, sections, type Task } from "./mockData";

interface Props {
  filter: "all" | "my" | "shared";
}

const TaskBoard = ({ filter }: Props) => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [newTask, setNewTask] = useState("");

  const filteredTasks = tasks.filter(t => {
    if (filter === "my") return t.assignees.includes("You");
    if (filter === "shared") return t.shared;
    return true;
  });

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, {
      id: Date.now(),
      type: "Task",
      title: newTask,
      description: "",
      due: "",
      status: "todo",
      assignees: ["You"],
      watchers: [],
      priority: "Medium",
      priorityLevel: "Minor",
      shared: false,
      comments: 0,
      labels: [],
      customFields: { estimate: "1h", environment: "Web" },
      subtasks: [],
      dependencies: [],
      attachments: [],
      recurring: false,
    }]);
    setNewTask("");
  };

  return (
    <div>
      {/* Add Task */}
      <div className="flex gap-2 mb-8" role="form" aria-label="Add new task">
        <Input
          placeholder="Add a new task..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddTask()}
          className="bg-card border-border"
          aria-label="New task title"
        />
        <Button onClick={handleAddTask} aria-label="Add task">Add</Button>
      </div>
      {/* Task Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Task board">
        {sections.map(section => (
          <div key={section.key} className="bg-card-gradient border border-border rounded-2xl p-4 min-h-[300px]" aria-label={section.label}>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-lg">{section.label}</span>
              {section.key === "inprogress" && (
                <span className="ml-2 text-xs text-primary animate-pulse">Bob is editing...</span>
              )}
            </div>
            <div className="space-y-4">
              {filteredTasks.filter(t => t.status === section.key).length === 0 && (
                <div className="text-muted-foreground text-sm">No tasks here.</div>
              )}
              {filteredTasks.filter(t => t.status === section.key).map(task => (
                <TaskCard key={task.id} task={task} comments={mockComments[task.id] || []} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
