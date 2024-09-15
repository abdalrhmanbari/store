import Collection from "./(Local)/(home)/collection/page";
import Hero from "./(Local)/(home)/hero/page";
import Product from "./(Local)/(home)/product/page";

export default function App() {
  return (
    <div className=" flex flex-col gap-[4rem]  mb-[5rem]">
      <Hero />
      <Collection />
      <Product />
    </div>
  );
}
