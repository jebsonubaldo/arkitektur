import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-20 bg-green">
      <div class="grid xl:grid-cols-4">
        <div class="p-4 col-span-2 xl:col-span-1">
          <h1 className="text-2xl font-playfair font-semibold leading-20 text-white">
            Arkitektur
          </h1>
          <p className="text-white mt-6">
            We always prioritize the maximum possible results with modern
            methods and latest technology{" "}
          </p>
        </div>

        <div class="p-4 lg:col-span-4 xl:col-span-1 text-white">
          <h1 className="font-inter text-lg font-medium">Solutions</h1>
          <ul className="font-inter text-base font-normal space-y-3 mt-6">
            <li>Design Construction</li>
            <li>House Renovation</li>
            <li>Interior Design</li>
          </ul>
        </div>
        <div class="p-4 lg:col-span-4 xl:col-span-1 text-white">
          <h1 className="font-inter text-lg font-medium">Office Support</h1>
          <ul className="font-inter text-base font-normal space-y-3 mt-6">
            <li>Help and Center</li>
            <li>Privacy and Policy</li>
            <li>Terms and Condition</li>
          </ul>
        </div>

        <div class=" p-4 col-span-2 xl:col-span-1 text-white">
          <h1 className="font-inter text-lg font-medium">Get Our Newsletter</h1>
          <p className="mt-6">
            Enter your email address to get update information about us
          </p>
          <form className="mt-5 flex">
            <div>
              <input
                type=""
                name=""
                value=""
                placeholder="Enter Email Adress"
                className="p-3"
              />
              <button type="" className="bg-yellow-300 text-green font-semibold p-3">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 text-center space-y-2">
        <div className="flex justify-center md:items-center xl:justify-start">
          <Image
            src="/images/Social.svg"
            alt=""
            width={200}
            height={0}
            className=""
          />
        </div>
        <div className="flex justify-center md:items-center xl:justify-end text-white">
          <p>Arkitektur 2023 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
