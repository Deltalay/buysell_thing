import Image from "next/image";
interface ItemCardProps {
  price: string;
  image: string;
  content: string;
}
export default function ItemCard({ price, image, content }: ItemCardProps) {
  return (
    <div className="bg-white text-black hover:-translate-y-1 transition-transform ease-in duration-200 ">
      <div>
        <figure>
          <Image
            width={600}
            height={400}
            src="https://placehold.co/600x400/png"
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="mt-2 px-2 py-1">
        <h2 className="text-xl font-semibold">Title</h2>
        <p>{content}</p>
        <div className="flex mt-2 justify-between items-center">
          <div>
            <p className="">{price}</p>
          </div>
          <div>
            <button className="border-black border transition ease-in duration-150 hover:bg-black hover:text-white px-4 py-2 rounded-lg text-lg font-semibold">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
