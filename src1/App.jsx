import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { OrderProvider } from "./context/OrderContext";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import CategoryPage from "./pages/CategoryPage";
import AllCategories from "./pages/AllCategories";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BulkOrders from "./pages/BulkOrders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Seller from "./pages/Seller";
import Admin from "./pages/Admin";
import BrandPage from "./pages/BrandPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <OrderProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductListing />} />
                  <Route path="/categories" element={<AllCategories />} />
                  <Route path="/category/:categoryId" element={<CategoryPage />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/product/:productId" element={<ProductDetails />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/orders/:orderId" element={<OrderDetails />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/bulk-orders" element={<BulkOrders />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/seller" element={<Seller />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/brand" element={<BrandPage />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </OrderProvider>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}
