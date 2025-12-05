import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import EMICalculator from './components/EMICalculator';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden max-w-full">
      <Header />
      <main className="w-full overflow-x-hidden max-w-full">
        <div id="home" className="w-full overflow-x-hidden">
          <Hero />
        </div>
        <div id="services" className="w-full overflow-x-hidden">
          <Services />
        </div>
        <div id="calculator" className="w-full overflow-x-hidden">
          <EMICalculator />
        </div>
        <div className="w-full overflow-x-hidden">
          <HowItWorks />
        </div>
        <div className="w-full overflow-x-hidden">
          <WhyChooseUs />
        </div>
        <div className="w-full overflow-x-hidden">
          <Testimonials />
        </div>
        <div id="about" className="w-full overflow-x-hidden">
          <About />
        </div>
        <div id="contact" className="w-full overflow-x-hidden">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
