import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import { useCart } from './context/CartContext'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<Cancel />} />
        </Routes>
      </div>
    </>
  )
}

export default App


const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  return (
    <>
      <div className=' h-[10vh] w-full bg-black text-white flex items-center justify-end'>
        <h1 className=' text-2xl font-extrabold mr-6 cursor-pointer'

          onClick={() => navigate("/cart")}
        >Cart({cartItems.length})</h1>
        <h1 className=' text-2xl font-extrabold mr-6 cursor-pointer'

          onClick={() => navigate("/")}
        >Home</h1>
      </div>
    </>
  )
}