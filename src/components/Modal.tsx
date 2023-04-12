import React from "react"
import { IoMdClose } from "react-icons/io"
interface Modalprops {
  children: React.ReactNode
  title: string
  setModal: () => void
}

const Modal = ({ children, title, setModal }: Modalprops) => {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
        onClick={() => setModal()}
      />
      <div className="w-[500px] p-5 rounded absolute bg-white top-10 left-1/2 -translate-x-1/2">
        <IoMdClose
          className="absolute left-[100%] -translate-x-[30px] top-3 hover:text-red-600 transition"
          onClick={() => setModal()}
        />
        <h1 className="text-2xl text-center mb-2">{title}</h1>
        {children}
      </div>
    </>
  )
}

export default Modal
