import ProductList from '../../ProductList';
import './ShowcaseSection.scss'

function ShowcaseSection() {
    return (
        <div className="showcase-section">
            <h2 className="showcase-section__title">Oportunidades para economizar</h2>
            <div className='showcase-section__line' />
            <ProductList />
        </div>
    )
}

export default ShowcaseSection;