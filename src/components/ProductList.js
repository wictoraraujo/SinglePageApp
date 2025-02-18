import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import productData from '../schemas/main/product-card.json'
import './ProductList.scss'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productData.images)
  }, [])

  const getImageUrl = (imageName) => {
    const imageUrl = require(`../assets/product-card/${imageName}`)
    return imageUrl
  }

  return (
    <div className="product-list">
      {products.map((item, index) => {
        const imageUrl = getImageUrl(item.url)
        return (
          <ProductCard
            key={index}
            imageUrl={imageUrl}
            title={item.title}
          />
        )
      })}
    </div>
  )
}

export default ProductList;
