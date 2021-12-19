import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Booking from "./Components/Booking/Booking";
import AddService from "./Components/Dashboard/AddService/AddService";
import Admin from "./Components/Dashboard/Admin/Admin";
import AdminRoute from "./Components/Dashboard/AdminRoute/AdminRoute";

import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Mybooking from "./Components/Dashboard/Mybooking/Mybooking";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Notfound from "./Components/Notfound/Notfound";
import Home from "./Components/Pages/Home/Home/Home";
import Navbars from "./Components/Pages/Navbars/Navbars";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ServicePages from "./Components/ServicePages/ServicePages";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbars></Navbars>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/servicepages" element={<ServicePages></ServicePages>}></Route>
            <Route path="/details/:Id" element={<Details></Details>}></Route>
            <Route path="/mybooking" element={<Mybooking></Mybooking>}></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<Mybooking></Mybooking>}></Route>
              <Route path={`/dashboard/mybooking`} element={<Mybooking></Mybooking>}></Route>
              <Route
                path={`/dashboard/makeadmin`}
                element={
                  <AdminRoute>
                    <Admin></Admin>
                  </AdminRoute>
                }
              ></Route>

              <Route
                path={`/dashboard/addservice`}
                element={
                  <AdminRoute>
                    <AddService></AddService>
                  </AdminRoute>
                }
              ></Route>
            </Route>
            <Route
              path="/booking"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
