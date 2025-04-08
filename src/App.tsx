
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LandingPageService from "./pages/services/LandingPageService";
import WebsiteService from "./pages/services/WebsiteService";
import CustomDevelopmentService from "./pages/services/CustomDevelopmentService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/landing-page" element={<LandingPageService />} />
          <Route path="/servicios/pagina-web" element={<WebsiteService />} />
          <Route path="/servicios/desarrollo-a-medida" element={<CustomDevelopmentService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
