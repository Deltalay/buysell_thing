import NavBar from "./components/navbar";
import Search from "./components/search"
export default function Home() {
  return <>
  <NavBar/>
  <section className="">
    <Search className="my-5 px-2" />
  </section>
  </>
}