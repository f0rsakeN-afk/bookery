import ProductList from "@/components/Home/ProductList";
import Hero from "@/components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="flex flex-col space-y-8 py-1">
        {/* <BookList title='Manga'  order="newest" /> */}
      </section>
    </div>
  );
};

export default Home;
