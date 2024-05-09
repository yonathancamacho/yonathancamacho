import Image from "next/image";
import IntroSection from "./components/IntroSection";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavigationBar />
      <div class="container mt-24 mx-auto px-12 py-12">
        <IntroSection />
        <IntroSection />
        <IntroSection />
        <IntroSection />
        <IntroSection />
      </div>
    </main>
  );
}
