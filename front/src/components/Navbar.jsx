"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null; 
  }
  

  return (
    <div className="fixed max-w-7xl mx-auto top-[26px] left-0 right-0 backdrop-blur-sm z-50">
      <div className="navbar bg-base-100 flex justify-between px-4 md:px-8 max-w-screen-2xl mx-auto">
       
        <div>
          <a
            href="/"
            className="btn btn-link flex items-center text-gray-900 gap-2 no-underline hover:no-underline active:no-underline"
          >
            <img src="/logo.svg" alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-[24px] font-bold">PANAL</span>
          </a>
        </div>

       
        <div className="gap-2">
        
          <ul className="menu menu-horizontal gap-2 text-sm font-semibold flex-nowrap mr-8 hidden md:flex">
            <li>
              <a href="#features">Recursos</a>
            </li>
            <li>
              <a href="#pricing">Equipos</a>
            </li>
            <li>
              <a href="#contact">Sobre el proyecto</a>
            </li>
          </ul>
          <div className="flex flex-nowrap gap-2">
          
            {pathname !== "/login" && (
              <Link href="/login" className="btn">
                Iniciar Sesión
              </Link>
            )}

            {pathname !== "/register" && (
              <Link href="/register" className="hidden md:flex btn btn-primary">
                Registrarse
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
