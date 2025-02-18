import ShowcaseSection from './showcase-section/ShowcaseSection'
import MosaicSection from './mosaic-section/MosaicSection'

function MainSection() {
    return (
        <main className="main-section">
            <MosaicSection />
            <ShowcaseSection />
        </main>
    )
}

export default MainSection;