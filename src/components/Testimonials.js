import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

const testimonials = [
  {
    body: 'Being able to work with the exterior is an extra ordinary things they provide execelent service and the results given are also very satisfying.',
    author: {
      name: 'Leslie Alexander',
      handle: 'Manila, Philippines',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'At that time I wanted to make a chair, then I want Arkitektur to make the chair and after was finished the results were unexpected.',
    author: {
      name: 'Leslie Alexander',
      handle: 'Makati, Philippines',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
  },
  {
    body: 'Being able to work with the exterior is an extra ordinary things they provide execelent service and the results given are also very satisfying.',
    author: {
      name: 'Leslie Alexander',
      handle: 'Cebu, Philippines',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
  },
]

export default function Example() {
  return (
    <div className="bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-4 text-md leading-8 text-[#A4A4A4]">
            Testimonials
          </p>
          <h2 className={`${playfair_display.className} mb-12 text-3xl font-bold text-[#333333] sm:text-4xl`} style={{ lineHeight: '1.5' }}>What Our Customers Are Saying</h2>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:grid sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="sm:p-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <figcaption className="flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-[#999999]">{`${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                  <blockquote className="pt-8 text-[#999999]">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <button type="button" class="text-gray-200 bg-green font-medium text-sm px-4 py-3 text-center">
            View More
          </button>
        </div>
      </div>
    </div>
  )
}
