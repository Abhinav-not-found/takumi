import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "@/features/landing/ui/pages/LandingPage";

const AppRoute = () => {
	const router = createBrowserRouter([
		{
			path: "",
			element: <LandingPage />,
		},
	]);
	return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
