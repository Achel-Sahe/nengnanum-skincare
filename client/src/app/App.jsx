import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ScrollToTop } from './ScrollToTop.jsx'
import { AdminLayout } from '../components/layout/AdminLayout.jsx'
import { StoreLayout } from '../components/layout/StoreLayout.jsx'

import { Home } from '../pages/Home.jsx'
import { Shop } from '../pages/Shop.jsx'
import { Skincare } from '../pages/Skincare.jsx'
import { Parfum } from '../pages/Parfum.jsx'
import { About } from '../pages/About.jsx'
import { QnA } from '../pages/QnA.jsx'
import { Team } from '../pages/Team.jsx'
import { Blog } from '../pages/Blog.jsx'
import { ProductDetail } from '../pages/ProductDetail.jsx'
import { Cart } from '../pages/Cart.jsx'
import { Checkout } from '../pages/checkout/Checkout.jsx'
import { CheckoutSuccess } from '../pages/checkout/CheckoutSuccess.jsx'
import { Login } from '../pages/auth/Login.jsx'
import { Register } from '../pages/auth/Register.jsx'
import { Account } from '../pages/account/Account.jsx'
import { Addresses } from '../pages/account/Addresses.jsx'
import { Orders } from '../pages/account/Orders.jsx'
import { OrderDetail } from '../pages/account/OrderDetail.jsx'
import { AdminDashboard } from '../pages/admin/Dashboard.jsx'
import { AdminProducts } from '../pages/admin/Products.jsx'
import { AdminCategories } from '../pages/admin/Categories.jsx'
import { AdminOrders } from '../pages/admin/Orders.jsx'
import { Contact } from '../pages/static/Contact.jsx'
import { ShippingReturns } from '../pages/static/ShippingReturns.jsx'
import { Privacy } from '../pages/static/Privacy.jsx'
import { Terms } from '../pages/static/Terms.jsx'
import { NotFound } from '../pages/NotFound.jsx'

/**
 * Route table. Keep in sync with the route list in
 * skincare-ecommerce-project-guide.md (section 5).
 *
 * Storefront copy from the Nengnanum beauty source maps as:
 * home -> catalog, About us -> heritage, QnA -> inquiries.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<StoreLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/skincare" element={<Skincare />} />
          <Route path="shop/parfum" element={<Parfum />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<CheckoutSuccess />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* TODO: protect account routes once auth is wired up. */}
          <Route path="account" element={<Account />} />
          <Route path="account/addresses" element={<Addresses />} />
          <Route path="account/orders" element={<Orders />} />
          <Route path="account/orders/:id" element={<OrderDetail />} />

          <Route path="about-us" element={<About />} />
          <Route path="qna" element={<QnA />} />
          <Route path="team" element={<Team />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shipping-returns" element={<ShippingReturns />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />

          {/* Legacy links from the first scaffold. */}
          <Route path="about" element={<Navigate to="/about-us" replace />} />
          <Route path="faq" element={<Navigate to="/qna" replace />} />
        </Route>

        {/* TODO: guard with role="ADMIN" from the backend. */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
