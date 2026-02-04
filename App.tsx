import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load below-the-fold components to improve initial load time
const PainPoints = React.lazy(() => import('./components/PainPoints'));
const About = React.lazy(() => import('./components/About'));
const Topics = React.lazy(() => import('./components/Topics'));
const Methodology = React.lazy(() => import('./components/Methodology'));
const Benefits = React.lazy(() => import('./components/Benefits'));
const Deliverables = React.lazy(() => import('./components/Deliverables'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const OtherServices = React.lazy(() => import('./components/OtherServices'));

// Simple loading placeholder
const LoadingSection = () => (
  <div className="py-24 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-brand-100 border-t-brand-800 rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-900">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Suspense fallback={<LoadingSection />}>
          <PainPoints />
          <About />
          <Topics />
          <Methodology />
          <Benefits />
          <Deliverables />
          <Pricing />
          <OtherServices />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;