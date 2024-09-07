import React, { useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'
import ErrorMessage from './ErrorMessage'

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 13,
  },
}
interface CreateProductProps {
  OnCreate: (product: IProduct) => void
}
export default function CreateProduct({ OnCreate }: CreateProductProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const submitHadler = async (event: React.FormEvent) => {
    setError('')
    event.preventDefault()
    if (value.trim().length === 0) {
      setError('Please enter valid title')
    }
    productData.title = value
    const res = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    )
    OnCreate(res.data)
  }
  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(event.target.value)
  return (
    <form onSubmit={submitHadler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 outline-0 w-full"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />
      <ErrorMessage error={error} />
      <button
        type="submit"
        className="border py-2 px-4 bg-orange-400 hover:text-neutral-600"
      >
        Create
      </button>
    </form>
  )
}
