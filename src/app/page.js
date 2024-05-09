import Image from "next/image";
import IntroSection from "./components/IntroSection";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="h-screen flex items-center justify-center">
        <NavigationBar />
        <div class="container mx-auto p-12 mt-24">
          <IntroSection />
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div class="container mx-auto p-12 mt-24">
          <IntroSection />
        </div>
      </div>
    </main>
  );
}
