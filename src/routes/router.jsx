import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import OnePage from "../pages/OnePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <OnePage />
            }
        ]
    }
])

export default router;