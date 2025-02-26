import {Routes,Route} from 'react-router-dom';
import NavBar from '../components/navbar';
import { lazy, Suspense } from 'react';

const Home=lazy(()=>import('../pages/home'))
const About=lazy(()=>import('../pages/about'))
const Products=lazy(()=>import('../pages/products'))
const ProductDetails=lazy(()=>import('../pages/product-details'))
const NoMatch=lazy(()=>import('../components/nomatch'))

function App() {

  return (
    <>
      <NavBar/>
      <Suspense fallback={<div className='container' >Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path='/products/:slug' element={<ProductDetails/>}/>
          <Route path='/*' element={<NoMatch/>} />
        </Routes>
      </Suspense>
      <NoMatch/>
    </>
  )
}
export default App
