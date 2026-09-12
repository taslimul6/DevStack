
import bannarStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col items-center px-6 py-12 sm:py-16 lg:flex-row lg:px-8">

        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-slate-900">
              Build Your Ideal
            </span>

            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <a
              href="#technology"
              className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-600 transition duration-300 hover:border-purple-300 hover:text-purple-600"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-10 flex w-full items-center justify-center lg:mt-0 lg:flex lg:w-1/2">
          <img
            src={bannarStack}
            alt="Development technology illustration"
            className="h-auto w-full max-w-[300px] object-contain sm:max-w-[360px] lg:max-w-[420px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

