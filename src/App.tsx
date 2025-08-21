import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import TaskBoard from "./pages/home/TaskBoard";
import Activity from "./pages/home/Activity";
import Settings from "./pages/home/Settings";
import Projects from "./pages/home/Projects";
import ProjectView from "./pages/home/ProjectView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<Projects />} />
            <Route path="project/:projectId" element={<ProjectView />} />
            <Route path="project/:projectId/my" element={<ProjectView />} />
            <Route path="project/:projectId/shared" element={<ProjectView />} />
            <Route path="project/:projectId/settings" element={<div className="text-center p-8">Project Settings coming soon!</div>} />
            <Route path="templates" element={<div className="text-center p-8">Templates coming soon!</div>} />
            <Route path="integrations" element={<div className="text-center p-8">Integrations coming soon!</div>} />
            <Route path="archive" element={<div className="text-center p-8">Archive coming soon!</div>} />
            <Route path="favorites" element={<div className="text-center p-8">Favorites coming soon!</div>} />
            <Route path="dashboard" element={<div className="text-center p-8">Dashboard coming soon!</div>} />
            <Route path="calendar" element={<div className="text-center p-8">Calendar coming soon!</div>} />
            <Route path="reports" element={<div className="text-center p-8">Reports coming soon!</div>} />
            <Route path="team" element={<div className="text-center p-8">Team coming soon!</div>} />
            <Route path="activity" element={<Activity />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
