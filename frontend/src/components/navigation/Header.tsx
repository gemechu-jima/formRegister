
import Logo from "../UI/Logo";
import NavLinks from "./NavLinks";

import { GiHamburgerMenu } from "react-icons/gi";

import Backdrop from "../UI/Backdrop";
import { Link } from "react-router-dom";
import Language from "./Language";
import { useGlobalContext } from "../../context/Context";
export default function Header() {
  const{ show, setShow}= useGlobalContext();

  return (
    <div className="bg-white">
      <div className="w-full sm:flex hidden sm:flex-row justify-between px-8 h-16 items-center">
        <Logo />
        <NavLinks setShow={setShow}/>
        <div className="flex gap-3 text-sm">
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Language />
        </div>
      </div>
      <div className="w-full sm:hidden flex justify-between items-center px-8 h-16 ">
      <Logo />
        {show && (
          <Backdrop setShow={setShow}>
                <Logo />
                <NavLinks setShow={setShow}/>
                <div className="absolute bottom-10 flex gap-6 flex-col left-3">
                <Link to={"/login"}>login</Link>
                <Link to="/">Setting</Link>
                <Language />
              </div>
          </Backdrop>
        )}
        <span>
         
          {!show && (
            <GiHamburgerMenu
              className="cursor-pointer"
              onClick={() => setShow(true)}
            />
          )}
        </span>
      </div>
    </div>
  );
}
