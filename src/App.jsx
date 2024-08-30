import Rootlayout from "./components/Rootlayout"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import ShopingCart from "./pages/ShopingCart"
import Error from "./pages/Error"
import CheckOut from "./pages/CheckOut"
import Blog from "./pages/Blog"
import ShopList from "./pages/ShopList"
import Contucts from "./pages/Contucts"
import Order from "./pages/Order"
import PagesProduct from "./pages/PagesProduct"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Payment from "./pages/Payment"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Products/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
    <Route path="/shopingcart" element={<ShopingCart/>}></Route>
    <Route path="/checkout" element={<CheckOut/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/shoplist" element={<ShopList/>}></Route>
    <Route path="/contuct" element={<Contucts/>}></Route>
    <Route path="/order" element={<Order/>}></Route>
    <Route path="/pagesproduct" element={<PagesProduct/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/payment" element={<Payment/>}></Route>
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
