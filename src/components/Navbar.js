import Image from "next/image";

export default function Navbar() {
  return (
    <section className="p-20">
      <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <Image
              src="/images/favicon.png"
              alt=""
              width={50}
              height={0}
              className="w-[30px] h-[5vh]"
            />
            <span class=" ml-2 text-xl font-semibold whitespace-nowrap text-black">
              Arkitektur
            </span>
          </a>
          <div class="flex md:order-2 space-x-2">
            <button type="button" class="text-gray-600 p-2">
              Sign Up
            </button>
            <button
              type="button"
              class="text-gray-200 bg-green font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Sign In
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-[#006D5B]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-[#006D5B]"
                  aria-current="page"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-[#006D5B]"
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
