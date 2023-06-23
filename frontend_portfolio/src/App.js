//add experience year/ add profile pics , place them kinn assets, check and reload
import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import {Navbar} from './components'
import './App.scss'

function App() {
  return (
    <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    </div>
  );
}

export default App;
