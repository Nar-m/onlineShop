import { HashRouter, Routes, Route } from "react-router-dom";
import Layount from "./Component/Layount";
import Home from "./Component/Home";
import Product from "./Component/Product";
import Cart from "./Component/Cart";
import ProductProvider from "./Component/Cartprovider";
import Cartproduct from "./Component/Cartproduct";
import Cartcontent from "./Component/Cartcontent";
import Inspirations from "./Component/Inspirations";


function App() {
  return (
    <HashRouter>
      <Cart>
        <Cartcontent>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<Layount />}>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="inspirations" element={<Inspirations />} />
              </Route>
            </Routes>
            <Cartproduct />
          </ProductProvider>
        </Cartcontent>
      </Cart>
    </HashRouter>
  )
}

export default App;
