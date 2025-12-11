import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { selectAuthIsSignedIn } from "./redux/auth/selectors.js";
import { useSelector } from "react-redux";
const Loader = lazy(() => import("./components/Loader.jsx"));
const Layout = lazy(() => import("./components/Layout.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage.jsx"));
const MailBoxPage = lazy(() => import("./pages/MailBoxPage.jsx"));
const ProductsPage = lazy(() => import("./pages/ProductsPage.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));
const DrinksPage = lazy(() => import("./pages/DrinksPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage.jsx"));
const CommentsPage = lazy(() => import("./pages/CommentsPage.jsx"));
const ViewPage = lazy(() => import("./pages/ViewPage.jsx"));

const App = () => {

const isSignedIn = useSelector(selectAuthIsSignedIn) 

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
           <Route path="/" element={<HomePage />} />
           {isSignedIn ? (
  <>
    <Route path="/contacts" element={<ContactsPage />} />
    <Route path="/mailbox" element={<MailBoxPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:productId/*" element={<ProductDetailsPage />} />
    <Route path="/comments" element={<CommentsPage />} />
    <Route path="/view" element={<ViewPage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/drinks" element={<DrinksPage />} />
  </>
) : (
  <>
    <Route path="/register" element={<RegistrationPage />} />
    <Route path="/login" element={<LoginPage />} />
  </>
)}
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
        </Layout>
  );
};

export default App;
