import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="banner.svg"
            alt=""
            className="w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-[#FF6584]">Tech News</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Your Source for the Latest in Tech.
            <br className="hidden md:inline lg:hidden" />
            Stay Informed, Stay Empowered.
          </p>
          <div>
            <button className="px-8 py-3 text-lg font-semibold rounded bg-[#FF6584] text-white">
              <Link href="/blog"> Start Reading Now!</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
