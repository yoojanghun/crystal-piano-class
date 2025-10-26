import sujungPic from "../../assets/sujung.webp";

function Header() {

  return(
    <header className="fixed w-full py-1 px-2.5 border-b-2 border-b-zinc-300 bg-white z-99">
      <nav className="flex justify-between items-center">
        <img 
          src={sujungPic} 
          alt="sujung pic" 
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <ul className="flex items-center list-none">
          <li className="px-7.5 cursor-pointer">About us</li>
          <li className="px-7.5 cursor-pointer">Program</li>
          <li className="px-7.5 cursor-pointer">Recruit</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;