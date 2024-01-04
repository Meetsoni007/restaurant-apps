import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Navbar/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/Navbar/About/About';
import Headtitle from './common/HeadTitle/Headtitle';
import Gallery from './components/gallery/Gallery';
import Destination from './components/Destinations/Home';
import SinglePage from './Singlepage/SinglePage'
import Blog from './components/Blog/Blog';
import BlogSingle from './components/blog-single-page/BlogSingle';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
// import Popular from './components/Navbar/Homesection/popular/Popular';


export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/gallery' exact component={Gallery}></Route>
          <Route path='/destination' exact component={Destination}></Route>
          <Route path='/singlepage/:id' exact component={SinglePage}></Route>
          <Route path='/blog' exact component={Blog}></Route>
          <Route path='/blogsingle/:id' exact component={BlogSingle}></Route>
          <Route path='/testimonial' exact component={Testimonial}></Route>
          <Route path='/contact' exact component={Contact}></Route>
          <Route path='/sign-in' exact component={Login}></Route>
          <Route path='/register' exact component={Register}></Route>
          <Headtitle />
        </Switch>
      </Router>
    </>
  )
}

export default App;