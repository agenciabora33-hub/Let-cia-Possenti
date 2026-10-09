import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BioLinkPage } from './pages/BioLinkPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Check initial pathname or fallback
    const path = window.location.pathname;
    if (path && path !== '') {
      return path;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      window.history.pushState({}, '', path);
    } catch {
      // Fallback for sandboxed frames if pushState is restricted
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching logic
  const renderPage = () => {
    if (currentPath === '/bio' || currentPath === '/links') {
      return <BioLinkPage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/contato') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/privacidade') {
      return <PrivacyPolicyPage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/termos') {
      return <TermsPage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/servicos') {
      return <ServicesIndexPage onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/servicos/')) {
      const slug = currentPath.replace('/servicos/', '').split('/')[0];
      return <ServiceDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    return <HomePage onNavigate={handleNavigate} />;
  };

  const isBioPage = currentPath === '/bio' || currentPath === '/links';

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#374151]">
      {!isBioPage && <Header currentPath={currentPath} onNavigate={handleNavigate} />}
      
      <main className="flex-1">
        {renderPage()}
      </main>

      {!isBioPage && <Footer onNavigate={handleNavigate} />}
      {!isBioPage && <FloatingWhatsApp />}
      {!isBioPage && <CookieBanner onNavigate={handleNavigate} />}
    </div>
  );
}
