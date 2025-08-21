import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TaskCard from "./TaskCard";
import { mockTasks, mockComments, sections, type Task } from "./mockData";
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const ProjectView = () => {
  const { projectId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [newTask, setNewTask] = useState("");

  const getActiveFilter = () => {
    if (location.pathname.includes('/my')) return "my";
    if (location.pathname.includes('/shared')) return "shared";
    return "all";
  };

  const activeFilter = getActiveFilter();

  const filteredTasks = tasks.filter(t => {
    if (activeFilter === "my") return t.assignees.includes("You");
    if (activeFilter === "shared") return t.shared;
    return true;
  });

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newTaskObj = {
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
    } as Task;
    setTasks([newTaskObj, ...tasks]);
    setNewTask("");
  };

  const onBottomNav = (tab: string) => {
    if (tab === "all") navigate(`/home/project/${projectId}`);
    if (tab === "my") navigate(`/home/project/${projectId}/my`);
    if (tab === "shared") navigate(`/home/project/${projectId}/shared`);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
      {/* Mobile bottom nav */}
      <div className="md:hidden sticky top-0 z-10 -mt-2">
        <Tabs value={activeFilter} onValueChange={onBottomNav} className="bg-card-gradient border border-border rounded-xl p-1">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="my">My</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Add Task */}
      <div className="flex gap-2 animate-in slide-in-from-top duration-300" role="form" aria-label="Add new task">
        <Input
          placeholder="Add a new task..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddTask()}
          className="bg-card border-border transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
          aria-label="New task title"
        />
        <Button 
          onClick={handleAddTask} 
          aria-label="Add task"
          className="transition-all duration-200 hover:scale-105 hover:shadow-lg"
          disabled={!newTask.trim()}
        >
          Add
        </Button>
      </div>

      {/* Task Board - tabs on mobile, grid on md+ */}
      <div className="md:hidden">
        <Tabs defaultValue="todo" className="space-y-4">
          <TabsList className="grid grid-cols-3">
            {sections.map(s => (
              <TabsTrigger key={s.key} value={s.key}>{s.label}</TabsTrigger>
            ))}
          </TabsList>
          {sections.map(section => (
            <TabsContent key={section.key} value={section.key} className="space-y-4">
              {filteredTasks.filter(t => t.status === section.key).length === 0 && (
                <div className="text-muted-foreground text-sm">No tasks here.</div>
              )}
              {filteredTasks.filter(t => t.status === section.key).map(task => (
                <TaskCard key={task.id} task={task} comments={mockComments[task.id] || []} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-bottom duration-500 delay-200" aria-label="Task board">
        {sections.map((section, index) => (
          <div 
            key={section.key} 
            className="bg-card-gradient border border-border rounded-2xl p-4 min-h-[300px] transition-all duration-300 hover:border-primary/30 hover:shadow-lg" 
            aria-label={section.label}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-lg transition-all duration-300 group-hover:text-primary">{section.label}</span>
              {section.key === "inprogress" && (
                <span className="ml-2 text-xs text-primary animate-pulse transition-all duration-300">Bob is editing...</span>
              )}
            </div>
            <div className="space-y-4">
              {filteredTasks.filter(t => t.status === section.key).length === 0 && (
                <div className="text-muted-foreground text-sm transition-all duration-300 hover:text-foreground">No tasks here.</div>
              )}
              {filteredTasks.filter(t => t.status === section.key).map((task, taskIndex) => (
                <div 
                  key={task.id} 
                  className="animate-in slide-in-from-right duration-300"
                  style={{ animationDelay: `${taskIndex * 50}ms` }}
                >
                  <TaskCard task={task} comments={mockComments[task.id] || []} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectView;
