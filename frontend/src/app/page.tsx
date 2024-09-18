import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Feedback from "@/components/Feedback";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import axios from "axios";

export default async function Home() {
  const props = await axios.get(`${process.env.BACKEND_URL}`);
  const { hero, banner } = props.data;

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
