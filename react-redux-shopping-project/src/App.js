import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import LayoutComp from './Components/LayoutComp';

function App() {

  //routing code
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<LayoutComp />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />

    </Route>
  ))

  return (
    <div className="App">
      {/* <Product></Product> */}
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
