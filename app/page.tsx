import ItemCard from "./components/itemCard";
import NavBar from "./components/navbar";

export default function Home() {
  return <>
  <NavBar/>
  <section className="my-3">
    <ItemCard price="22" content="32" image="da" />
  </section>
  </>
}