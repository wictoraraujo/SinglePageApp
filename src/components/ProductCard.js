import './ProductCard.scss'

function ProductCard({ imageUrl, title }) {
    return (
      <div className="product-card">
        <img className='product-card__image' src={imageUrl} alt={title} />
        <h4 className='product-card__description'>{title}</h4>
        <div className='product-card__prices'>
          <span className='product-card__old-price'>de R$ 582,90</span>
          <span className='product-card__price'>R$ 238,41</span>
          <p className='product-card__installments'>
            <span className='product-card__installment'>5x</span>
            de
            <span className='product-card__installment installment-price'>R$ 47,68</span>
            sem juros
          </p>
        </div>
        <button className='product-card__cart-button'>Adicionar ao carrinho</button>
      </div>
    )
  }
  
  export default ProductCard;
  