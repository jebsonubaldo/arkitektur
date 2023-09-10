import Image from "next/image";

export default function Testimonilas() {
  return (
    <section className="p-20 bg-gray-50">
      <div>
        <div className="text-center">
          <h1 className="text-gray-500 font-inter text-base font-medium">
            Testimonials
          </h1>
          <span className="text-5xl font-playfair font-semibold leading-20 text-gray-700">
            What Our Customers Are Saying
          </span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
          <div class="p-8 bg-white shadow-lg">
            <div className="flex items-center">
              <Image
                src="/images/image_1.jpg"
                alt=""
                width={60}
                height={60}
                className="rounded-full w-[60px] h-[60px]"
              />
              <div className="ml-4">
                <h1 className="text-xl font-semibold">Alexandro Ramirez</h1>
                <span className="text-gray-500">Bandung, Indonesia</span>
              </div>
              <div className="flex ml-10 items-center">
                <Image
                  src="/images/star.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="rounded-full w-[30px] h-[30px]"
                />
                <span className="font-bold">4.8</span>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-gray-600 font-inter text-base font-normal">
                “Being able to work with the exterior is an extra ordinary
                things they provide execelent service and the results given are
                also very satisfying”
              </p>
            </div>
          </div>
          <div class="p-8  bg-white shadow-lg">
            <div className="flex items-center">
              <Image
                src="/images/image_2.jpg"
                alt=""
                width={60}
                height={60}
                className="rounded-full w-[60px] h-[60px]"
              />
              <div className="ml-4">
                <h1 className="text-xl font-semibold">Trifanny Michael</h1>
                <span className="text-gray-500">Jakarta, Indonesia</span>
              </div>
              <div className="flex ml-10 items-center">
                <Image
                  src="/images/star.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="rounded-full w-[30px] h-[30px]"
                />
                <span className="font-bold">4.8</span>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-gray-600 font-inter text-base font-normal">
                “At that time I wanted to make a chair, then I want Arkitektur to
                make the chair and after was finished the results were
                unexpected also the results”
              </p>
            </div>
          </div>
          <div class="p-8  bg-white shadow-lg">
            <div className="flex items-center">
              <Image
                src="/images/image_3.jpg"
                alt=""
                width={60}
                height={60}
                className="rounded-full w-[60px] h-[60px]"
              />
              <div className="ml-4">
                <h1 className="text-xl font-semibold">Siti Maemunah Ria</h1>
                <span className="text-gray-500">Sukabumi, Indonesia</span>
              </div>
              <div className="flex ml-10 items-center">
                <Image
                  src="/images/star.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="rounded-full w-[30px] h-[30px]"
                />
                <span className="font-bold">4.8</span>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-gray-600 font-inter text-base font-normal">
                “Being able to work with the exterior is an extra ordinary
                things they provide execelent service and the results given are
                also very satisfying”
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="" className=" p-4 mt-20 bg-green text-white">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
