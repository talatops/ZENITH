import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";

const TaskInterface = () => {
  return (
    <section className="py-24 bg-card-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Add Tasks With Ease Using
              <br />
              <span className="gradient-text">ZENITH's Intuitive Interface</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Quickly And Effortlessly Create Tasks To Stay Organized And On Track With Your Goals
            </p>
            <div className="flex gap-4">
              <Button variant="hero" size="lg">
                Add New Task
                <Plus className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Start Calendar
                <Calendar className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right content - Task interface mockup */}
          <div className="relative">
            {/* 3D Spline integration point */}
            <div className="bg-background rounded-3xl p-8 border border-primary/20 relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-hero-gradient rounded-full pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full pulse-glow"></div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">My Tasks Dashboard</h3>
                <p className="text-sm text-muted-foreground">Manage your daily productivity</p>
              </div>

              {/* Task creation form mockup */}
              <div className="card-glow mb-6">
                <div className="flex items-center gap-3 p-4">
                  <div className="w-4 h-4 border-2 border-primary rounded"></div>
                  <input 
                    type="text" 
                    placeholder="Add a new task..."
                    className="flex-1 bg-transparent border-none outline-none text-sm"
                    readOnly
                  />
                  <Button size="sm" variant="glow">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Task list mockup */}
              <div className="space-y-3">
                {[
                  { text: "Design landing page wireframes", completed: true, priority: "high" },
                  { text: "Review client feedback", completed: false, priority: "medium" },
                  { text: "Update project documentation", completed: false, priority: "low" },
                ].map((task, index) => (
                  <div key={index} className="card-glow">
                    <div className="flex items-center gap-3 p-3">
                      <div className={`w-4 h-4 rounded border-2 ${
                        task.completed 
                          ? 'bg-primary border-primary' 
                          : 'border-muted-foreground'
                      }`}>
                        {task.completed && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <span className={`flex-1 text-sm ${
                        task.completed ? 'line-through text-muted-foreground' : ''
                      }`}>
                        {task.text}
                      </span>
                      <div className={`px-2 py-1 rounded text-xs ${
                        task.priority === 'high' ? 'bg-destructive/20 text-destructive' :
                        task.priority === 'medium' ? 'bg-accent/20 text-accent' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {task.priority}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskInterface;