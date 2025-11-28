import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Work from "./pages/Work";
import People from "./pages/People";
import ClientDetail from "./pages/ClientDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BookCall from "./pages/BookCall";
import KarenMannheimCaseStudy from "./pages/KarenMannheimCaseStudy";
import MikeKaedingCaseStudy from "./pages/MikeKaedingCaseStudy";
import JuanPabloRomeroCaseStudy from "./pages/JuanPabloRomeroCaseStudy";
import HospitalityGMCaseStudy from "./pages/HospitalityGMCaseStudy";
import RetailCEOCaseStudy from "./pages/RetailCEOCaseStudy";
import NotFound from "./pages/NotFound";
import KarenPezetProject from "./pages/projects/KarenPezetProject";
import KarenFourSeasonsProject from "./pages/projects/KarenFourSeasonsProject";
import KarenSaadiyatProject from "./pages/projects/KarenSaadiyatProject";
import KarenTrazzoExpansionProject from "./pages/projects/KarenTrazzoExpansionProject";
import KarenPorscheProject from "./pages/projects/KarenPorscheProject";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <div className="route-transition-wrapper">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/people" element={<People />} />
            <Route path="/clients/karen-mannheim" element={<KarenMannheimCaseStudy />} />
            <Route path="/clients/mike-kaeding" element={<MikeKaedingCaseStudy />} />
            <Route path="/clients/juan-pablo-romero" element={<JuanPabloRomeroCaseStudy />} />
            <Route path="/clients/hospitality-gm-abudhabi" element={<HospitalityGMCaseStudy />} />
            <Route path="/clients/retail-ceo-dubai" element={<RetailCEOCaseStudy />} />
            <Route path="/clients/:clientSlug" element={<ClientDetail />} />
            <Route path="/work/:projectSlug" element={<CaseStudyDetail />} />
            <Route path="/book-call" element={<BookCall />} />
            {/* Karen Mannheim Project Pages */}
            <Route path="/projects/karen-mannheim/pezet" element={<KarenPezetProject />} />
            <Route path="/projects/karen-mannheim/four-seasons-penthouse" element={<KarenFourSeasonsProject />} />
            <Route path="/projects/karen-mannheim/saadiyat-music-festival" element={<KarenSaadiyatProject />} />
            <Route path="/projects/karen-mannheim/porsche-flagship" element={<KarenPorscheProject />} />
            <Route path="/projects/karen-mannheim/trazzo-expansion" element={<KarenTrazzoExpansionProject />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
