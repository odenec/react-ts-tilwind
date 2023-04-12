import { useState } from "react"
import { IProduct } from "../modules"

interface ProductProps {
  product: IProduct
}
const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400"
  const btnClasses = ["py-2", "px-4", btnBgClassName]
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bolt">{product.price} $ </span>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((details) => !details)}>
        {!details ? "Show Details" : "Remove Details"}
      </button>
      {details && <p>{product.description}</p>}
      <p>
        {product.rating ? "Rate:" : ""}
        <span style={{ fontWeight: "bold" }}>
          {product.rating ? product.rating.rate : " "}
        </span>
      </p>
    </div>
  )
}

export default Product
