import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Manege from "./pages/Manege";
import ProjectX from "./pages/ProjectX";
import Project2Part1 from "./pages/Project2Part1";
import Project2Part2 from "./pages/Project2Part2";
import Project2Part3 from "./pages/Project2Part3";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manege" element={<Manege />} />
          <Route path="/project-x" element={<ProjectX />} />
          <Route path="/project-2/part-1" element={<Project2Part1 />} />
          <Route path="/project-2/part-2" element={<Project2Part2 />} />
          <Route path="/project-2/part-3" element={<Project2Part3 />} />
          <Route path="/day-1" element={<Day1 />} />
          <Route path="/day-2" element={<Day2 />} />
          <Route path="/day-3" element={<Day3 />} />
          <Route path="/day-4" element={<Day4 />} />
          <Route path="/day-5" element={<Day5 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
