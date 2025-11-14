export interface User {
  id: string
  name: string
  email: string
  phone?: string
  created_at: string
}

export interface Store {
  id: string
  name: string
  email: string
  phone?: string
  cnpj?: string
  address?: string
  created_at: string
}

export interface Product {
  id: string
  store_id: string
  name: string
  category: string
  price: number
  image_url?: string
  description?: string
  sizes?: string[]
  colors?: string[]
  created_at: string
}

export interface Outfit {
  id: string
  user_id: string
  name: string
  products: string[]
  image_url?: string
  likes: number
  created_at: string
}
