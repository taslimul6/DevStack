const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-4 md:text-left">

          <div className="md:col-span-2">
            <a
              href="#home"
              className="flex items-center justify-center gap-2 text-lg font-semibold text-slate-900 md:justify-start"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-pink-500 text-[10px] font-bold text-white">
                DS
              </span>

              <span>DevOPS Stack</span>
            </a>

            <p className="mt-4 max-w-md mx-auto text-sm leading-5 text-slate-500 md:mx-0">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center justify-center gap-5 text-sm md:justify-start">
              <a
                href="#github"
                className="text-slate-600 transition hover:text-purple-600"
              >
                GitHub
              </a>

              <a
                href="#twitter"
                className="text-slate-600 transition hover:text-purple-600"
              >
                Twitter
              </a>

              <a
                href="#linkedin"
                className="text-slate-600 transition hover:text-purple-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-slate-500 transition hover:text-purple-600"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technology"
                  className="text-slate-500 transition hover:text-purple-600"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-slate-500 transition hover:text-purple-600"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-slate-500 transition hover:text-purple-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-500 transition hover:text-purple-600"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#careers"
                  className="text-slate-500 transition hover:text-purple-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#privacy"
                  className="text-slate-500 transition hover:text-purple-600"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="text-slate-500 transition hover:text-purple-600"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-100 pt-6">

          <div className="flex flex-col items-center gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#privacy"
                className="transition hover:text-purple-600"
              >
                Privacy
              </a>

              <a
                href="#terms"
                className="transition hover:text-purple-600"
              >
                Terms
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
