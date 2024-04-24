import Banner from "@/components/Banner";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner
        title="We sell seeds"
        description="that always sprout and gardening supplies which never break"
        className="hero"
      />
    </main>
  );
}
