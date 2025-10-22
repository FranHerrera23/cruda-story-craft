import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClientDetail from "./pages/ClientDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BookCall from "./pages/BookCall";
import KarenMannheimCaseStudy from "./pages/KarenMannheimCaseStudy";
import MikeKaedingCaseStudy from "./pages/MikeKaedingCaseStudy";
import NotFound from "./pages/NotFound";
import KarenPezetProject from "./pages/projects/KarenPezetProject";
import KarenFourSeasonsProject from "./pages/projects/KarenFourSeasonsProject";
import KarenSaadiyatProject from "./pages/projects/KarenSaadiyatProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clients/karen-mannheim" element={<KarenMannheimCaseStudy />} />
          <Route path="/clients/mike-kaeding" element={<MikeKaedingCaseStudy />} />
          <Route path="/clients/:clientSlug" element={<ClientDetail />} />
          <Route path="/work/:projectSlug" element={<CaseStudyDetail />} />
          <Route path="/book-call" element={<BookCall />} />
          {/* Karen Mannheim Project Pages */}
          <Route path="/projects/karen-mannheim/pezet" element={<KarenPezetProject />} />
          <Route path="/projects/karen-mannheim/four-seasons-penthouse" element={<KarenFourSeasonsProject />} />
          <Route path="/projects/karen-mannheim/saadiyat-music-festival" element={<KarenSaadiyatProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
