import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AdminManagement from "./pages/adminManagement/AdminManagement";
import ServiceManagement from "./pages/serviceManagement/ServiceManagement";
import HomePageContentEditing from "./pages/homePageContentEditing/HomePageContentEditing";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/admin",
          element: <AdminManagement />,
        },
        {
          path: "/services",
          element: <ServiceManagement />,
        },
        {
          path: "/content-editing",
          element: <HomePageContentEditing />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
