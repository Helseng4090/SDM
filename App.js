import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import ImageSlider from './components/ImageSlider.jsx'
import Navbar from './components/Navbar.jsx'
import Plan from './components/Plan.jsx'
import Sdm from './components/Sdm.jsx'
import Section from './components/Section.jsx'


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Section />
      <Plan />
      <Sdm />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;