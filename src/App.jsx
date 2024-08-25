import Rootlayout from "./components/Rootlayout"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import ShopingCart from "./pages/ShopingCart"
import Error from "./pages/Error"
import CheckOut from "./pages/CheckOut"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Products/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
    <Route path="/shopingcart" element={<ShopingCart/>}></Route>
    <Route path="/checkout" element={<CheckOut/>}></Route>
    <Route path="*" element={<Error/>}></Route>
  </Route>
))

function App() {


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
