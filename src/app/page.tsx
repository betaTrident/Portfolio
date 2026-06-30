import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hackathons } from "@/components/sections/hackathons";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { getPersonJsonLd } from "@/lib/structured-data";

export default function Home() {
  const personJsonLd = getPersonJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Projects />
        <Hackathons />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
