import React, { useState } from 'react'
import { IProduct } from '../models'
interface ProductProps {
  product: IProduct
}
export default function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-blue-600' : 'bg-yellow-600'
  const btnClasses = 'py-2 px-4 border w-28 ' + btnBgClassName
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <h1>
        {product.brand + ' '}
        {product.name}
      </h1>

      <img
        className="h-32"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
      />
      <p className="font-semibold">{'Price: ' + product.price + '$'}</p>
      <p>
        Rating: <a className="font-medium no-underline">{product.rating}</a>
      </p>
      <button
        className={btnClasses}
        onClick={() => {
          setDetails((prev) => !prev)
        }}
      >
        {details ? 'Hide Info' : 'Show Info'}
      </button>
      {details && <p>{product.description}</p>}
    </div>
  )
}
