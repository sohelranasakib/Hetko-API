import Rootlayout from "./components/Rootlayout"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Products from "./pages/Products"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Products/>}></Route>
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
