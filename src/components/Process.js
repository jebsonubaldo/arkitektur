import Image from "next/image";

export default function Process() {
  return (
    <section className="p-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="py-8 px-12 ">
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-gray-400 font-inter font-medium text-base">
                How It Works
              </h1>
            </div>
            <div className="mt-8">
              <h1 className="text-gray-800 font-playfair font-bold text-5xl leading-[60px]">
                We provide the best process experience
              </h1>
            </div>
          </div>

          <div>
            <div className="relative flex items-center mt-10">
              <Image
                src="/images/Ellipse 7.svg"
                alt=""
                width={60}
                height={60}
                className="rounded-full w-[50px] h-[50px]"
              />
              {/* <span className="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 text-lg font-semibold">
                01
              </span> */}
              <div className="ml-6 space-y-2">
                <h1 className="text-gray-700 font-inter font-semibold text-lg">
                  Design Building
                </h1>
                <p className="text-gray-500 font-inter text-md font-normal leading-[24px]">
                  First things you determine the concept and model you want,
                  then choose what colors and materials
                </p>
              </div>
            </div>
            <div className="relative flex items-center mt-10">
              <Image
                src="/images/Ellipse 7.svg"
                alt=""
                width={60}
                height={60}
                className="rounded-full w-[50px] h-[50px]"
              />
              {/* <span className="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 text-lg font-semibold">
                01
              </span> */}
              <div className="ml-6 space-y-2">
                <h1 className="text-gray-700 font-inter font-semibold text-lg">
                  Preliminary Drawing
                </h1>
                <p className="text-gray-500 font-inter text-md font-normal leading-[24px]">
                  First things you determine the concept and model you want,
                  then choose what colors and materials
                </p>
              </div>
            </div>
            <div className="relative flex items-center mt-10">
              <Image
                src="/images/Ellipse 7.svg"
                alt=""
                width={60}
                height={60}
                className="rounded-full w-[50px] h-[50px]"
              />
              {/* <span className="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 text-lg font-semibold">
                01
              </span> */}
              <div className="ml-6 space-y-2">
                <h1 className="text-gray-700 font-inter font-semibold text-lg">
                  Construction Details
                </h1>
                <p className="text-gray-500 font-inter text-md font-normal leading-[24px]">
                  First things you determine the concept and model you want,
                  then choose what colors and materials
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-4">
          <Image
            src="/images/image_3.jpg"
            alt=""
            width={700}
            height={0}
            className="w-[700px] h-[85vh]"
          />
        </div>
      </div>
    </section>
  );
}
