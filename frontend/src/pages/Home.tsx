import ProductList from "@/components/Home/ProductList";
import Hero from "@/components/Home/Hero";
import Testimonial from "@/components/Home/Testimonial";
import SocialFeed from "@/components/Home/SocialFeed";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="flex flex-col space-y-8">
        <ProductList />
        <SocialFeed />
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
