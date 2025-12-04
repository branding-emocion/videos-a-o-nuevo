import Header from "../components/Header";
import Hero from "../components/Hero";
import NavTabs from "../components/NavTabs";
import Reasons from "../components/Reasons";
import Features from "../components/Features";
import Steps from "../components/Steps";
import VideosExamples from "../components/VideosExamples";
import Plans from "../components/Plans";
import Experience from "../components/Experience";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <NavTabs />
      <Reasons />
      <Features />
      <Steps />
      <VideosExamples />
      <Plans />
      <Experience />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
