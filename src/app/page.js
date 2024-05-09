import Image from "next/image";
import IntroSection from "./components/IntroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mx-auto px-12 py-12">
        <IntroSection />
      </div>
    </main>
  );
}
