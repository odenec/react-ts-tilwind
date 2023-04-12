import React, { useState } from "react"
import { IProduct } from "../modules"
import axios from "axios"
import ErrorMassage from "./ErrorProducts"
import ErrorProducts from "./ErrorProducts"
import Loader from "./Loader"

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 43,
    count: 10,
  },
}

interface CreateProductProps {
  createHandler: (product: IProduct) => void
}
const CreateProduct = ({ createHandler }: CreateProductProps) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()

    if (value.trim().length === 0) {
      setError("Please enter valid title")
      return
    }
    setError("")
    productData.title = value
    setLoading(true)
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    )
    setLoading(false)
    createHandler(response.data)
    console.log(response.data)
  }
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <>
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
        <input
          value={value}
          onChange={changeHandler}
          type="text"
          className="border py-2 px-4 mb-2 w-full outline-0"
          placeholder="Enter product title..."
        />
        {error && <ErrorProducts error={error} />}
        <button
          type="submit"
          className=" py-2 px-4 border bg-yellow-500 hover:text-white transition">
          Create
        </button>
      </form>
    </>
  )
}

export default CreateProduct
