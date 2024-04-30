interface ItemCardProps {
  price: string;
  image: string;
  content: string;
}
export default function ItemCard({price, image, content}: ItemCardProps) {
  return <div className="bg-white hover:-translate-y-1 transition-transform ease-in duration-200 px-2 py-1 ">
    <div>
      <h1>Hello</h1>
    </div>
  </div>
}
