import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomeLayout } from "./Layouts/HomeLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { NotFound } from "./Pages/NotFound";
import { Shop } from "./Pages/Shop";
import { QueryClient, QueryClientProvider } from "react-query";
import { EachProductDetails } from "./Pages/EachProductDetails";
import { ProductsLayout } from "./Layouts/ProductsLayout";

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
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
