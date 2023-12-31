import Image from "next/image";

import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

const stats = [
    { label: 'Years Experience', value: '16' },
    { label: 'Professional Architect', value: '10k' },
    { label: 'Projects Completed', value: '15k' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-8 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <Image
                src="/images/image_2.jpg"
                alt="image_2"
                width={0}
                height={0}
                className="object-contain h-300 object-center group-hover:opacity-75"
              />
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="mb-4 text-md leading-8 text-[#A4A4A4] text-center sm:text-left">About Us</p>
                <h2 className={`${playfair_display.className} mb-12 text-3xl font-bold text-[#333333] text-center sm:text-left sm:text-4xl`} style={{ lineHeight: '1.5' }}>Get to know us more to find the best results</h2>
                <div className="max-w-xl">
                  <p className="mt-4 text-[#999999]">
                  You dont have to worry about the results because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials.
                  </p>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-5">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-[#006D5B]">{stat.value}</dd>
                    <dt className="text-sm font-semibold leading-6 text-[#999999]">{stat.label}</dt>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex">
                <button type="button" className="text-gray-200 bg-[#006D5B] font-medium text-sm px-4 py-3 text-center hover:bg-[#FFFF99] hover:text-[#006D5B]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  