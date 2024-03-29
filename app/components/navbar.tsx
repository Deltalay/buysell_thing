"use client";
import { useState } from "react";
export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [widthValue, setWidthValue] = useState(0);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  function openSearch(): void {
    if (openSearchBar == false) {
      setOpenSearchBar(true);
    } else if (openSearchBar == true) {
      setOpenSearchBar(false);
    } else {
      setOpenSearchBar(false);
    }
  }
  function handleMenuBar(): void {
    if (openMenu == false) {
      setOpenMenu(true);
      setWidthValue(250);
    } else if (openMenu == true) {
      setOpenMenu(false);
      setWidthValue(0);
    } else {
      setOpenMenu(false);
      setWidthValue(0);
    }
  }
  return (
    <header className="bg-gray-300/10 py-3 min-h-fit overflow-hidden">
      <nav className="flex items-center justify-between px-2 flex-row">
        <div className="w-full">
          <a
            href="/"
            className="font-extrabold md:text-2xl sm:text-xl text-lg lg:text-3xl font-mono"
          >
            BuySellThing
          </a>
        </div>
        <div className="w-full mx-auto text-center lg:block hidden">
          <ul className="flex lg:gap-5 md:gap-3 gap-2   font-semibold items-center lg:text-lg flex-row">
            <li>Home</li>
            <li>Deals</li>
            <li>Accesories</li>
            <li>Partner</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-full flex gap-4   flex-row-reverse">
          <button onClick={handleMenuBar} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="hidden md:block bg-transparent text-white outline-none border-2 ease-in transition duration-150 hover:text-black hover:bg-white font-semibold px-3 py-2 rounded-3xl ">
            Order Now
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </button>
          <button onClick={openSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`__searchBar  px-2  flex items-center ${
          openSearchBar ? "__openSearch " : null
        } `}
      >
        <input
          type="text"
          placeholder="What in your mind?"
          className="w-full block p-2 rounded-tl-md rounded-bl-md text-black outline-none "
        />
        <button className="rounded-tr-md p-2 text-black border-l border-black transition duration-150 hover:text-white hover:bg-black bg-white rounded-br-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`lg:hidden __menu __menu ${openMenu ? "__open_menu" : null}`}
      >
        <div className="relative ">
          <button
            onClick={handleMenuBar}
            className="absolute top-[30px] right-[30px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul className="flex gap-8 font-semibold text-xl flex-col px-2 h-screen items-center justify-center">
          <li>Home</li>
          <li>Deals</li>

          <li>Accesories</li>
          <li>Partner</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
