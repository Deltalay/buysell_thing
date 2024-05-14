import ItemCard from "./components/itemCard";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="my-3 grid grid-cols-4 gap-5 px-2">
        <ItemCard price="22" content="32" image="da" />
        <ItemCard price="22" content="32" image="da" />
        <ItemCard price="22" content="32" image="da" />
        <ItemCard price="22" content="32" image="da" />
        <ItemCard price="22" content="32" image="da" />
        <ItemCard price="22" content="32" image="da" />
        <ItemCard price="22" content="32" image="da" />
        <ItemCard price="22" content="32" image="da" />
        <ItemCard price="22" content="32" image="da" />
      </section>
    </>
  );
}
