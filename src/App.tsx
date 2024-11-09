import Recognitions from "./components/Recognitions";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Programs from "./components/Programs";
import Tagline from "./components/Tagline";
import Footer from "./components/Footer";
import Enquiry from "./components/Enquiry";
import Promotion from "./components/Promotion";
import Media from "./components/Media";
import Mentors from "./components/Mentors";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <main className="w-full overflow-x-hidden h-auto">
      <Navbar />
      <Hero />
      <Recognitions />
      <Features />
      <Programs />
      <Tagline />
      <Journey />
      <Testimonials />
      <Mentors />
      <Media />
      <Promotion />
      <Enquiry />
      <Footer />
    </main>
  );
}

export default App;
