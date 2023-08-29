import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { StoreContextProvider } from './Contexts/StoreContext';
import { HomeLayout } from "./Layouts/HomeLayout";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { NotFound } from "./Pages/NotFound";
import { Shop } from "./Pages/Shop/Shop";
import { QueryClient, QueryClientProvider } from "react-query";
import { EachProductDetails } from "./Pages/Shop/EachProductDetails";
import { ProductsLayout } from "./Layouts/ProductsLayout";
import { Cart } from "./Pages/Cart/Cart";
import { Admin } from "./Pages/Admin/Admin";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/products" element={<ProductsLayout/>}>
        <Route index element={<Shop/>}/>
        <Route path=":id" element={<EachProductDetails/>}/>
      </Route>
      {/* <Route path="products" element={<Shop/>}>
        <Route path=":id" element={<EachProductDetails/>}/>
      </Route> */}
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="admin" element={<Admin/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <StoreContextProvider>
          <RouterProvider router={router}/>
      </StoreContextProvider>
        </QueryClientProvider>
    </div>
  );
}

export default App;
