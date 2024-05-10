import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Cursor from "./components/Cursor";
import Image from "next/image";
import IntroSection from "./components/IntroSection";
import NavigationBar from "./components/NavigationBar";
import ProjectsSection from "./components/ProjectsSection";
import QualificationsSection from "./components/QualificationsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Cursor />
      <div className="h-screen flex items-center justify-center">
        <NavigationBar />
        <div class="container mx-auto p-12 mt-24">
          <IntroSection />
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div class="container mx-auto p-12 mt-24">
          <AboutSection />
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div class="container mx-auto p-12 mt-24">
          <ProjectsSection />
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div class="container mx-auto p-12 mt-24">
          <QualificationsSection />
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div class="container mx-auto p-12 mt-24">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
