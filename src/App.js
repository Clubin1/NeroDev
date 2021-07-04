import { Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import WebService from './pages/WebService'
import SoftwareService from './pages/SoftwareService'
import LogoService from './pages/LogoService'
import Works from './pages/Works'
import NotFound from './pages/NotFound.js'
import Contact from './pages/Contact'
// Componenets
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import GoToTop from './components/GoToTop'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GoToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/development/website' exact component={WebService} />
        <Route path='/development/software' exact component={SoftwareService} />
        <Route path='/development/logo' exact component={LogoService} />
        <Route path='/works' exact component={Works} />
        <Route path='/contact' exact component={Contact} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
