import ShowcaseSection from './ShowcaseSection'
import MosaicSection from './mosaic-section/MosaicSection'

function MainSection() {
    return (
        <div className="main-section">
            <MosaicSection />
            <ShowcaseSection />
        </div>
    )
}

export default MainSection;