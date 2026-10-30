import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ScrollToTop } from './ScrollToTop.jsx'
import { AdminLayout } from '../components/layout/AdminLayout.jsx'
import { StoreLayout } from '../components/layout/StoreLayout.jsx'

import { CatalogPage } from '../pages/CatalogPage.jsx'
import { HeritagePage } from '../pages/HeritagePage.jsx'
import { InquiriesPage } from '../pages/InquiriesPage.jsx'
import { TeamPage } from '../pages/TeamPage.jsx'
import { BlogPage } from '../pages/BlogPage.jsx'
import { ProductDetailPage } from '../pages/ProductDetailPage.jsx'
import { CartPage } from '../pages/CartPage.jsx'
import { CheckoutPage } from '../pages/checkout/CheckoutPage.jsx'
import { CheckoutSuccessPage } from '../pages/checkout/CheckoutSuccessPage.jsx'
import { LoginPage } from '../pages/auth/LoginPage.jsx'
import { RegisterPage } from '../pages/auth/RegisterPage.jsx'
import { AccountPage } from '../pages/account/AccountPage.jsx'
import { AddressesPage } from '../pages/account/AddressesPage.jsx'
import { OrdersPage } from '../pages/account/OrdersPage.jsx'
import { OrderDetailPage } from '../pages/account/OrderDetailPage.jsx'
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage.jsx'
import { AdminProductsPage } from '../pages/admin/AdminProductsPage.jsx'
import { AdminCategoriesPage } from '../pages/admin/AdminCategoriesPage.jsx'
import { AdminOrdersPage } from '../pages/admin/AdminOrdersPage.jsx'
import { ContactPage } from '../pages/static/ContactPage.jsx'
import { ShippingReturnsPage } from '../pages/static/ShippingReturnsPage.jsx'
import { PrivacyPage } from '../pages/static/PrivacyPage.jsx'
import { TermsPage } from '../pages/static/TermsPage.jsx'
import { NotFoundPage } from '../pages/NotFoundPage.jsx'

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
          <Route index element={<CatalogPage showcase />} />
          <Route path="shop" element={<CatalogPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="checkout/success" element={<CheckoutSuccessPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          {/* TODO: protect account routes once auth is wired up. */}
          <Route path="account" element={<AccountPage />} />
          <Route path="account/addresses" element={<AddressesPage />} />
          <Route path="account/orders" element={<OrdersPage />} />
          <Route path="account/orders/:id" element={<OrderDetailPage />} />

          <Route path="about-us" element={<HeritagePage />} />
          <Route path="qna" element={<InquiriesPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="shipping-returns" element={<ShippingReturnsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />

          {/* Legacy links from the first scaffold. */}
          <Route path="about" element={<Navigate to="/about-us" replace />} />
          <Route path="faq" element={<Navigate to="/qna" replace />} />
        </Route>

        {/* TODO: guard with role="ADMIN" from the backend. */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="categories" element={<AdminCategoriesPage />} />
          <Route path="orders" element={<AdminOrdersPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
