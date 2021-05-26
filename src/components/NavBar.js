import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="background-color: rgba(0,0,0,0.0)">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center px-3 ml-6 mr-6 text-red-800 hover:text-green-900 text-3xl font-bold cursive tracking-widest"
          >
            Kevin Pacis
          </NavLink>
          <NavLink
            to="/post"
            className="cursive inline-flex items-center px-3 my-6 rounded text-red-800 hover:text-green-900"
            activeClassName="text-white"
          >
            Blog
          </NavLink>
          <NavLink
            to="/project"
            className="cursive inline-flex items-center px-3 my-6 rounded text-red-800 hover:text-green-900"
            activeClassName="text-white"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="cursive inline-flex items-center px-3 my-6 rounded text-red-800 hover:text-green-900"
            activeClassName="text-white"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex px-3 my-6 mr-6">
          <SocialIcon
            url="https://linkedin.com/in/kevin-pacis"
            className="mr-3"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/CripSeas"
            className="mr-3"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/xkvp212/"
            className="mr-3"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
