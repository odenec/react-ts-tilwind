import { useState, useContext } from "react"

import CreateProduct from "../components/CreateProduct"
import ErrorProducts from "../components/ErrorProducts"
import Loader from "../components/Loader"
import Modal from "../components/Modal"
import Product from "../components/Product"
import { useProducts } from "../hooks/products"
import { NavLink } from "react-router-dom"
import { IProduct } from "../modules"
import { ModalContext } from "../context/ModalContext"

const Home = () => {
  const { modal, open, close } = useContext(ModalContext)
  const { loading, error, products, addProdict } = useProducts()

  const createHandler = (product: IProduct) => {
    close()
    addProdict(product)
  }
  return (
    <div className="container mx-auto max-w-2xl ">
      {loading && <Loader />}
      {error && <ErrorProducts error={error} />}
      {!loading && (
        <>
          <NavLink
            className="block w-full text-center mb-5 px-2 py-4 bg-slate-200 shadow-md"
            to="/about">
            About
          </NavLink>
          <button
            className="px-2 py-4 mb-5 border ml-[calc(50%-57px)] bg-yellow-200 "
            onClick={() => open()}>
            Add products
          </button>
        </>
      )}
      {products.map((p) => (
        <Product product={p} key={p.id} />
      ))}

      {modal && (
        <Modal title="Create new Product" setModal={close}>
          <CreateProduct createHandler={createHandler} />
        </Modal>
      )}
    </div>
  )
}
export default Home
