import ProductList from "@/components/Home/ProductList";
import Hero from "@/components/Home/Hero";
import Testimonial from "@/components/Home/Testimonial";
import SocialFeed from "@/components/Home/SocialFeed";
import ImageSlider from "@/components/Home/ImageSlider";
import PaymentMethods from "@/components/Home/PaymentMethods";
import AppBanner from "@/components/Home/AppBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="flex flex-col ">
        <ProductList />
        <ImageSlider />
        <SocialFeed />
        <Testimonial />
        <PaymentMethods />
        <AppBanner />
      </section>
    </div>
  );
};

export default Home;
