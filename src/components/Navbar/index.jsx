import { Link } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const navLinks = [
    { title: "Home", path: "/", active: true },
    { title: "About Us", path: "/Aboutus", active: false },
    { title: "Products", path: "/Products", active: false },
    { title: "Partners", path: "/Partners", active: false },
    { title: "Contact", path: "/Contact", active: false },
]
const[ active, setActive ]= useState('');
  return (
     <div className="z-[100] w-full my-auto mx-0 h-16 md:px-[40px] px-8 py-10 flex items-center justify-between fixed bg-transparent top-0 ">
      <span className="flex items-center right-[209px]">
      <img src="https://techpay.ng/assets/img/black-logo.png" alt="Techpay" height="19px" width="118px" className="absolute" />
      </span>
			<div className="md:flex hidden items-center gap-7 ">
				{navLinks.map((navLink) => {
					return (
						<Link
							to={navLink.path}
							key={navLink.title}
              onClick={() => {
                setActive(""); 
                window.scrollTo(0,0);
            }}
						>
							<span
								className={`font-medium ${navLink.active ? "text-blue-400" : "text-black"} hover:${navLink.active ? "text-black" : "text-blue-400"}`}
							>
								{navLink.title}
							</span>
						</Link>
					);
				})}
      </div>
      <div className="md:hidden block cursor-pointer">
        <IoGridOutline color="#000" />
      </div>
    </div>
  )
}

export default Navbar;