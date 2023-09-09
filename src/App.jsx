import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MovieDetails from './components/movieDetails/MovieDetails';
import PageNotFound from './components/pageNotFound/PageNotFound';
const App = ()=>{
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App;