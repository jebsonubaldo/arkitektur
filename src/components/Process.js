import Image from "next/image";

import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ subsets: ["latin"] });
  
export default function Example() {
    return (
      <div className="bg-white py-8 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">        
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="mb-4 text-md leading-8 text-[#A4A4A4] text-center sm:text-left">How It Works</p>
                <h2 className={`${playfair_display.className} mb-12 text-3xl font-bold text-[#333333] text-center sm:text-left sm:text-4xl`} style={{ lineHeight: '1.5' }}>We provide the best process experience</h2>
                <div>
                  <div className="relative flex items-center mt-10 bg-white shadow-lg p-3">
                    <Image
                      src="/images/Ellipse 7.svg"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full w-[50px] h-[50px]"
                    />
                    <span className="absolute top-1/2 left-9 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                      01
                    </span>
                    <div className="ml-6 space-y-2">
                      <h3 className="text-gray-700 font-inter font-semibold text-lg">
                        Design Building
                      </h3>
                      <p className="text-[#999999] font-inter text-md font-normal leading-[24px]">
                        First things you determine the concept and model you want,
                        then choose what colors and materials
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-center mt-10  bg-white shadow-lg p-3">
                    <Image
                      src="/images/Ellipse 7.svg"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full w-[50px] h-[50px]"
                    />
                    <span className="absolute top-1/2 left-9 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                      02
                    </span>
                    <div className="ml-6 space-y-2">
                      <h3 className="text-gray-700 font-inter font-semibold text-lg">
                        Preliminary Drawing
                      </h3>
                      <p className="text-[#999999] font-inter text-md font-normal leading-[24px]">
                        When the briefing process is complete and what the client
                        wants has been achieved then we carry out
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-center mt-10  bg-white shadow-lg p-3">
                    <Image
                      src="/images/Ellipse 7.svg"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full w-[50px] h-[50px]"
                    />
                    <span className="absolute top-1/2 left-9 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                      03
                    </span>
                    <div className="ml-6 space-y-2">
                      <h3 className="text-gray-700 font-inter font-semibold text-lg">
                        Construction Details
                      </h3>
                      <p className="text-[#999999] font-inter text-md font-normal leading-[24px]">
                        After the process is complete, we will immediately carry out
                        of the finishing stage and we do it care
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="lg:pr-4">
              <Image width={0} height={0} src="/images/image_3.jpg" alt="image_3" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  