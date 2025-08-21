import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { ChevronDown, User, Settings, LogOut, ArrowLeft, Edit, Zap, Menu } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  const [accentGlow, setAccentGlow] = useState(true);
  const [open, setOpen] = useState(false);

  // Check if we're in a project view
  const isInProjectView = location.pathname.includes('/home/project/');
  const projectId = location.pathname.split('/').pop();

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedAccentGlow = localStorage.getItem('accentGlow');

    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    }
    if (savedAccentGlow !== null) {
      setAccentGlow(savedAccentGlow === 'true');
    }
  }, []);

  // Handle dark mode toggle
  const handleToggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Handle accent glow toggle
  const handleToggleGlow = () => {
    const newAccentGlow = !accentGlow;
    setAccentGlow(newAccentGlow);
    localStorage.setItem('accentGlow', newAccentGlow.toString());

    if (newAccentGlow) {
      document.documentElement.classList.add('glow-enabled');
    } else {
      document.documentElement.classList.remove('glow-enabled');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const handleBackToProjects = () => {
    navigate('/home');
    setOpen(false);
  };

  const MobileNav = () => (
    <div className="p-4">
      {isInProjectView ? (
        <div className="space-y-2">
          <Button variant={isActive(`/home/project/${projectId}`) ? "default" : "ghost"} asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to={`/home/project/${projectId}`}>All Tasks</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to={`/home/project/${projectId}/my`}>My Tasks</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to={`/home/project/${projectId}/shared`}>Shared</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to={`/home/project/${projectId}/settings`}>
              <Edit className="w-4 h-4 mr-2" />
              Edit Project Settings
            </Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          <Button variant={isActive("/home") ? "default" : "ghost"} asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home">All Projects</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/templates">Templates</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/integrations">Integrations</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/archive">Archive</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/favorites">Favorites</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/calendar">Calendar</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/reports">Reports</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/team">Team</Link>
          </Button>
          <Button variant={isActive("/home/activity") ? "default" : "ghost"} asChild className="w-full justify-start" onClick={() => setOpen(false)}>
            <Link to="/home/activity">Activity</Link>
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex h-screen">
        {/* Sidebar (desktop) */}
        <div className="hidden md:flex w-64 bg-card-gradient border-r border-border flex-col transition-all duration-300 ease-in-out">
          {/* Top Section */}
          <div className="p-6 border-b border-border transition-all duration-300 ease-in-out">
            {isInProjectView ? (
              <div className="space-y-4 animate-in slide-in-from-left duration-300">
                <Button 
                  variant="ghost" 
                  onClick={handleBackToProjects}
                  className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-accent/10"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                  Back to Projects
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3 animate-in slide-in-from-left duration-300">
                <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg gradient-text">ZENITH</div>
                  <div className="text-xs text-muted-foreground">Project Management</div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 transition-all duration-300 ease-in-out">
            {isInProjectView ? (
              // Project-specific navigation
              <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-100">
                <Button variant={isActive(`/home/project/${projectId}`) ? "default" : "ghost"} asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to={`/home/project/${projectId}`}>All Tasks</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to={`/home/project/${projectId}/my`}>My Tasks</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to={`/home/project/${projectId}/shared`}>Shared</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to={`/home/project/${projectId}/settings`}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Project Settings
                  </Link>
                </Button>
              </div>
            ) : (
              // Main navigation
              <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-100">
                <Button variant={isActive("/home") ? "default" : "ghost"} asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home">All Projects</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/templates">Templates</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/integrations">Integrations</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/archive">Archive</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/favorites">Favorites</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/dashboard">Dashboard</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/calendar">Calendar</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/reports">Reports</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/team">Team</Link>
                </Button>
                <Button variant={isActive("/home/activity") ? "default" : "ghost"} asChild className="w-full justify-start transition-all duration-200 hover:scale-[1.02]">
                  <Link to="/home/activity">Activity</Link>
                </Button>
              </div>
            )}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-border transition-all duration-300 ease-in-out">
            <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-200">
              <Button variant="secondary" className="w-full transition-all duration-200 hover:scale-[1.02]" onClick={handleToggleTheme} aria-label="Toggle dark/light mode">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button>
              <Button variant="secondary" className="w-full transition-all duration-200 hover:scale-[1.02]" onClick={handleToggleGlow} aria-label="Toggle accent glow">
                {accentGlow ? "Disable Glow" : "Enable Glow"}
              </Button>
              <div className="text-xs text-muted-foreground text-center mt-2">
                Tip: Press <kbd className="px-1 py-0.5 bg-muted rounded">Ctrl+K</kbd> to open command palette (UI only)
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
          {/* Header */}
          <header className="bg-card-gradient border-b border-border p-4 md:p-6 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-between gap-2 md:hidden">
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="w-5 h-5" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-card-gradient border-t border-border">
                  <DrawerHeader className="flex items-center justify-between">
                    <DrawerTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold gradient-text">ZENITH</span>
                    </DrawerTitle>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="sm">Close</Button>
                    </DrawerClose>
                  </DrawerHeader>
                  <MobileNav />
                </DrawerContent>
              </Drawer>
              <div className="text-sm text-muted-foreground">
                {isInProjectView ? "Project" : "Workspace"}
              </div>
              {/* spacer to balance */}
              <div className="w-10" />
            </div>
            <div className="hidden md:flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              {!isInProjectView && (
                <div className="animate-in slide-in-from-top duration-300">
                  <h1 className="text-3xl font-bold gradient-text text-glow">
                    {location.pathname === "/home" && "All Projects"}
                    {location.pathname === "/home/templates" && "Templates"}
                    {location.pathname === "/home/integrations" && "Integrations"}
                    {location.pathname === "/home/archive" && "Archive"}
                    {location.pathname === "/home/favorites" && "Favorites"}
                    {location.pathname === "/home/dashboard" && "Dashboard"}
                    {location.pathname === "/home/calendar" && "Calendar"}
                    {location.pathname === "/home/reports" && "Reports"}
                    {location.pathname === "/home/team" && "Team"}
                    {location.pathname === "/home/activity" && "Activity Feed"}
                    {location.pathname === "/home/settings" && "Settings"}
                  </h1>
                  <div className="text-muted-foreground">
                    {location.pathname === "/home" && "Manage your project workspaces"}
                    {location.pathname === "/home/templates" && "Reusable task templates and workflows"}
                    {location.pathname === "/home/integrations" && "Connect with your favorite tools"}
                    {location.pathname === "/home/archive" && "Completed and archived projects"}
                    {location.pathname === "/home/favorites" && "Your starred and pinned items"}
                    {location.pathname === "/home/dashboard" && "Overview and analytics"}
                    {location.pathname === "/home/calendar" && "Timeline view of all activities"}
                    {location.pathname === "/home/reports" && "Performance insights and metrics"}
                    {location.pathname === "/home/team" && "Manage team members and roles"}
                    {location.pathname === "/home/activity" && "Stay updated with real-time project activity"}
                    {location.pathname === "/home/settings" && "Customize your workspace experience"}
                  </div>
                </div>
              )}
              {isInProjectView && (
                <div className="animate-in slide-in-from-top duration-300">
                  <h1 className="text-3xl font-bold gradient-text text-glow">ZENITH App</h1>
                  <div className="text-muted-foreground">Main application development</div>
                </div>
              )}
              {/* User chip on top-right */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="hidden md:flex items-center gap-3 group cursor-pointer hover:bg-card/50 rounded-xl p-2 transition-all duration-200 hover:scale-105" aria-label="Current user">
                    <div className="relative">
                      <Avatar className="w-10 h-10 bg-gradient-to-br from-primary to-accent text-white font-bold ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-200 group-hover:scale-110">Y</Avatar>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">You</div>
                      <div className="text-xs text-green-400 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        Online
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:rotate-180" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 animate-in slide-in-from-top duration-200">
                  <DropdownMenuItem onClick={() => navigate("/home/settings")} className="cursor-pointer transition-all duration-200 hover:bg-accent/10">
                    <User className="mr-2 h-4 w-4" />
                    <span>Edit Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/home/settings")} className="cursor-pointer transition-all duration-200 hover:bg-accent/10">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/login")} className="cursor-pointer transition-all duration-200 hover:bg-accent/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Content Area */}
          <main className="flex-1 overflow-auto p-4 md:p-6 transition-all duration-300 ease-in-out">
            <div className="animate-in slide-in-from-bottom duration-300 delay-100">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
