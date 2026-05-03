import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { HomepageHero } from "@/components/HomepageHero";
import FormCreator from "@/components/FormCreator/FormCreator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={``}
    >
      <main className="min-h-svh bg-background">
        <HomepageHero />
        <FormCreator />
      </main>
    </div>
  );
}
