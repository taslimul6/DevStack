export default function Nav() {


  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
  
    <a href="#home" className="shrink-0">
      <img
        src="/src/assets/logo-text.png"
        alt="Logo"
        className="h-8 w-auto"
      />
    </a>

    
    <ul className="flex items-center gap-6">
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

   
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100"
      >
        Sign in
      </button>

      <button
        type="button"
        className="rounded-md bg-[#DB2777] px-4 py-2 text-sm font-medium text-white hover:bg-[#D91B7E]"
      >
        Sign up
      </button>
    </div>
  </div>
</nav>
  )
}