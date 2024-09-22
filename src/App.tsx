import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";
import "./App.css";

const App = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    );

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;