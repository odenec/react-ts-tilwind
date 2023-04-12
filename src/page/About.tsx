import React from "react"
import { NavLink } from "react-router-dom"

const About = () => {
  return (
    <div className="container mx-auto max-w-2xl ">
      <NavLink
        className="block w-full text-center mb-5 px-2 py-4 bg-slate-200 shadow-md"
        to="/">
        Home
      </NavLink>
      <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
        <p>React + TS + tailwind</p>
        <p>Хуки useState, useEffect, useContext</p>

        <p>React Router</p>
      </div>
    </div>
  )
}
export default About
