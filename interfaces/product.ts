export interface ProductList {
    products: Product[]
  }
  
  export interface Product {
    id: number
    name: string
    description: string
    price: number
    category: string
    stock: number
    rating: number
    imageUrl: string
  }
  