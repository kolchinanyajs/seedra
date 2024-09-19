import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Feedback from "@/components/Feedback";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { fetchData } from "@/utils/fetchData";

export default async function Home() {
  const { hero, banner } = await fetchData();

  return (
    <main>
      <Hero {...hero} />
      <Banner {...banner} />
      <Products />
      <Blog />
      <Feedback />
      <Help />
    </main>
  );
}
