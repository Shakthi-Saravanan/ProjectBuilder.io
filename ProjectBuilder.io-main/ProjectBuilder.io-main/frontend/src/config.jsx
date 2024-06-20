import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login_Reg from "./Pages/Login_Reg";
import UserProfile from "./Pages/UserProfile";
import About from "./Pages/About";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Homepage></Homepage>
    },
    {
        path:'/loginReg',
        element:<Login_Reg></Login_Reg>
    },
    {
        path:'/UserProfile',
        element:<UserProfile></UserProfile>
    },
    {
        path:'/about',
        element:<About></About>
    }
])

export default route