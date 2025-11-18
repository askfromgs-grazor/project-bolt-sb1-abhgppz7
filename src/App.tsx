import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import Projects from './pages/Projects';
import Support from './pages/Support';
import Team from './pages/Team';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'ecosystem':
        return <Ecosystem />;
      case 'projects':
        return <Projects />;
      case 'support':
        return <Support />;
      case 'team':
        return <Team />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Ruhuna Engineering Hub | MMESS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
