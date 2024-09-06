import { IProduct } from '../models'

export const products: IProduct[] = [
  {
    product_id: 1,
    name: 'Smartphone',
    description: 'High-end smartphone with advanced features.',
    price: 599.99,
    unit: 'Piece',
    image: 'https://example.com/images/smartphone.jpg',
    discount: 10,
    availability: true,
    brand: 'BrandX',
    category: 'Electronics',
    rating: 4.5,
    reviews: [
      {
        user_id: 1,
        rating: 5,
        comment: 'Great phone with a superb camera!',
      },
      {
        user_id: 2,
        rating: 4,
        comment: 'Good performance, but the battery life could be better.',
      },
    ],
  },
  {
    product_id: 2,
    name: 'Laptop',
    description: 'Powerful laptop for work and gaming.',
    price: 999.99,
    unit: 'Piece',
    image: 'https://example.com/images/laptop.jpg',
    discount: 5,
    availability: true,
    brand: 'BrandY',
    category: 'Electronics',
    rating: 4.7,
    reviews: [
      {
        user_id: 3,
        rating: 5,
        comment: 'Excellent laptop for gaming and work tasks.',
      },
      {
        user_id: 4,
        rating: 4,
        comment: 'Good value for the price.',
      },
    ],
  },
]
