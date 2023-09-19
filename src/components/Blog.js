import parse from "html-react-parser";
import Image from "next/image";
import React from "react";

export const getStaticPaths = async () => {
  try {
    const res = await fetch(
      "https://dev-arkitektur-headless.pantheonsite.io//wp-json/wp/v2/posts"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const paths = data.map((post) => {
      return {
        params: { id: post.id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  try {
    const res = await fetch(
      `https://dev-arkitektur-headless.pantheonsite.io//wp-json/wp/v2/posts/${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch post data");
    }
    const post = await res.json();

    return {
      props: { post },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      props: { post: null },
    };
  }
};

export default function Example() {
  return (
    <div className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            <article
              key={post.id}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <Image
                  src={post.x_featured_media}
                  alt={post.title.rendered}
                  width={0}
                  height={0}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {new Date(post.date).toDateString()}
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categories}
                  </a>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.title.rendered}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {parse(formattedContent)}
                  </p>
                </div>
                <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                  <div className="relative flex items-center gap-x-4">
                    <Image
                      src={post.x_featured_media}
                      alt={post.title.rendered}
                      width={0}
                      height={0}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {post.x_author}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.x_author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
