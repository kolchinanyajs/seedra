import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Feedback from "@/components/Feedback";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default async function Home() {
  const res = await fetch(`${process.env.BACKEND_URL}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { hero } = await res.json();

  return (
    <main>
      <Hero {...hero} />
      <Banner
        title="We sell seeds"
        description="that always sprout and gardening supplies which never break"
        className="hero"
      />
      <Products />
      <Blog />
      <Feedback />
      <Help />
    </main>
  );
}
