import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

export default function Example() {
  return (
  <div className="bg-white pb-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-md leading-8 text-[#A4A4A4]">
          Our Services
        </p>
        <h2 className={`${playfair_display.className} text-3xl font-bold text-[#333333] sm:text-4xl`} style={{ lineHeight: '1.5' }}>We Shape the Life of Tomorrow</h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="bg-gray-400/5 p-8 sm:p-10 hover:bg-[#006D5B] hover:text-white">
            <h3 class="text-center">01 Architecture</h3>
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 hover:bg-[#006D5B] hover:text-white">
            <h3 class="text-center">02 Landscape Design</h3>
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 hover:bg-[#006D5B] hover:text-white">
            <h3 class="text-center">03 Engineering</h3>
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 hover:bg-[#006D5B] hover:text-white">
            <h3 class="text-center">04 Interior Design</h3>
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 hover:bg-[#006D5B] hover:text-white">
            <h3 class="text-center">05 Graphic Design</h3>
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10 hover:bg-[#006D5B] hover:text-white">
            <h3 class="text-center">06 Consultancy</h3>
          </div>
      </div>
    </div>
  </div>
  )
}