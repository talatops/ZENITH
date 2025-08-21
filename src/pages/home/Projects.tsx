import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Plus, Users, Clock } from "lucide-react";
import { mockProjects } from "./mockData";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/home/project/${projectId}`);
  };

  return (
    <div className="space-y-4 md:space-y-6 animate-in slide-in-from-bottom duration-500">
      {/* Header with Create Project */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 animate-in slide-in-from-top duration-300">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">All Projects</h2>
          <p className="text-muted-foreground">Manage your project workspaces</p>
        </div>
        <Button className="self-start md:self-auto flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg">
          <Plus className="w-4 h-4" />
          Create Project
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {mockProjects.map((project, index) => (
          <Card 
            key={project.id} 
            className="bg-card-gradient border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transform-gpu animate-in slide-in-from-bottom duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleProjectClick(project.id)}
          >
            <CardHeader className="p-4 md:p-6 transition-all duration-300 group-hover:bg-accent/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${project.color} transition-all duration-300 group-hover:scale-125`}></div>
                  <CardTitle className="text-base md:text-lg transition-all duration-300 group-hover:text-primary">{project.name}</CardTitle>
                </div>
              </div>
              <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">{project.description}</p>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-6 transition-all duration-300">
              {/* Progress */}
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-2">
                  <span className="transition-all duration-300 group-hover:text-primary">Progress</span>
                  <span className="transition-all duration-300 group-hover:text-primary font-semibold">{Math.round((project.completedCount / project.taskCount) * 100)}%</span>
                </div>
                <Progress 
                  value={(project.completedCount / project.taskCount) * 100} 
                  className="h-1.5 md:h-2 transition-all duration-300 group-hover:h-3" 
                />
                <div className="text-[11px] md:text-xs text-muted-foreground mt-1 transition-all duration-300 group-hover:text-foreground">
                  {project.completedCount} of {project.taskCount} tasks completed
                </div>
              </div>

              {/* Members */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-primary" />
                  <div className="flex -space-x-2">
                    {project.members.slice(0, 3).map((member, index) => (
                      <Avatar 
                        key={index} 
                        className="w-6 h-6 bg-accent text-white text-xs font-bold border-2 border-background transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary/20"
                        style={{ zIndex: 3 - index }}
                      >
                        {member[0]}
                      </Avatar>
                    ))}
                    {project.members.length > 3 && (
                      <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground border-2 border-background transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary">
                        +{project.members.length - 3}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] md:text-xs text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                  <Clock className="w-3 h-3 transition-all duration-300 group-hover:animate-spin" />
                  {project.lastUpdated}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
