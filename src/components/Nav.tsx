
export default function Nav() {


  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

     <img
      src="/hamBurger.png"
      alt="Menu"
      className="h-6 w-6 md:hidden"
    />
  
    <a href="#home" className="shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
      <img
        src="/logo-text.png"
        className="h-8 w-auto"
      />
    </a>

    
    <ul className="hidden md:flex items-center gap-6">
      <li>
        <a href="#home" className="transition hover:text-[#DB2777]">
          Home
        </a>
      </li>
      <li>
        <a href="#technology" className="transition hover:text-[#DB2777]">
          Technology
        </a>
      </li>
      <li>
        <a href="#about" className="transition hover:text-[#DB2777]">
          About
        </a>
      </li>
      <li>
        <a href="#contact" className="transition hover:text-[#DB2777]">
          Contact
        </a>
      </li>
    </ul>

   
    <div className="flex items-center gap-1 md:gap-2">
      <button
        type="button"
        className="rounded-md px-2 py-1 text-xs font-medium hover:bg-gray-100 md:px-4 md:py-2 md:text-sm"
      >
        Sign in
      </button>

      <button
        type="button"
        className="rounded-md bg-[#DB2777] px-2 py-1 text-xs font-medium text-white hover:bg-[#D91B7E] md:px-4 md:py-2 md:text-sm"
      >
        Sign up
      </button>
    </div>

    
  </div>
</nav>
  )
}
