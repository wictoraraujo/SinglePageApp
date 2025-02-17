import HeaderSection from './components/header/HeaderSection';
import FooterSection from './components/footer/FooterSection';
import MainSection from './components/main/Main';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <HeaderSection />
      <main>
        <MainSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App; 
