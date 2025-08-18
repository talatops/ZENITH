import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";

const TaskInterface = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Add Tasks With Ease Using
              <br />
              <span className="gradient-text">ZENITH's Intuitive Interface</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Quickly And Effortlessly Create Tasks To Stay Organized And On Track With Your Goals
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Add New Task
                <Plus className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                Start Calendar
                <Calendar className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right content - Full Web Dashboard */}
          <div className="relative">
            {/* 3D Spline integration point for web dashboard */}
            <div className="bg-background rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-primary/20 relative overflow-hidden">
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-hero-gradient rounded-full pulse-glow"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-accent rounded-full pulse-glow"></div>
              
              {/* Dashboard header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-1 sm:mb-2">ZENITH Dashboard</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Manage your productivity workspace</p>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-hero-gradient rounded-full flex items-center justify-center pulse-glow">
                    <span className="text-white text-xs sm:text-sm font-bold">JD</span>
                  </div>
                </div>
              </div>

              {/* Quick actions and stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="card-glow p-2 sm:p-3 lg:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">24</div>
                  <div className="text-xs text-muted-foreground">Total Tasks</div>
                </div>
                <div className="card-glow p-2 sm:p-3 lg:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">16</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="card-glow p-2 sm:p-3 lg:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-accent">8</div>
                  <div className="text-xs text-muted-foreground">In Progress</div>
                </div>
                <div className="card-glow p-2 sm:p-3 lg:p-4 text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-destructive">2</div>
                  <div className="text-xs text-muted-foreground">Overdue</div>
                </div>
              </div>

              {/* Task creation and filters */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="card-glow flex-1">
                  <div className="flex items-center gap-3 p-3 sm:p-4">
                    <div className="w-3 sm:w-4 h-3 sm:h-4 border-2 border-primary rounded"></div>
                    <input 
                      type="text" 
                      placeholder="Add a new task..."
                      className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm"
                      readOnly
                    />
                    <Button size="sm" variant="glow">
                      <Plus className="w-3 sm:w-4 h-3 sm:h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  <Button size="sm" variant="hero-outline" className="whitespace-nowrap">All</Button>
                  <Button size="sm" variant="ghost" className="whitespace-nowrap">High</Button>
                  <Button size="sm" variant="ghost" className="whitespace-nowrap">Medium</Button>
                  <Button size="sm" variant="ghost" className="whitespace-nowrap">Low</Button>
                </div>
              </div>

              {/* Task columns layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* To Do Column */}
                <div className="card-glow p-4">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                    To Do (4)
                  </h4>
                  <div className="space-y-3">
                    {[
                      { text: "Design landing page wireframes", priority: "high" },
                      { text: "Review client feedback", priority: "medium" },
                    ].map((task, index) => (
                      <div key={index} className="bg-card-gradient border border-border rounded-xl p-3 hover:border-primary/40 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">{task.text}</span>
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            task.priority === 'high' ? 'bg-destructive/20 text-destructive' :
                            'bg-accent/20 text-accent'
                          }`}>
                            {task.priority}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">Due today</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Progress Column */}
                <div className="card-glow p-4">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full pulse-glow"></div>
                    In Progress (2)
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-card-gradient border border-border rounded-xl p-3 hover:border-accent/40 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">Update project documentation</span>
                        <div className="px-2 py-1 rounded-full text-xs bg-secondary/20 text-secondary">
                          low
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">Due tomorrow</div>
                      <div className="bg-muted rounded-full h-1">
                        <div className="bg-accent h-1 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Done Column */}
                <div className="card-glow p-4">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary rounded-full pulse-glow"></div>
                    Done (16)
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-card-gradient border border-border rounded-xl p-3 opacity-60">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-4 bg-secondary rounded border-2 border-secondary flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium line-through">Setup development environment</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Completed yesterday</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskInterface;