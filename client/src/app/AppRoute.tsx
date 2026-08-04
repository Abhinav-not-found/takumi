import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/app/layouts/main-layout";
import LandingPage from "@/features/landing/ui/pages/LandingPage";

const AppRoute = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{
					path: "",
					element: <LandingPage />,
				},
			],
		},
	]);
	return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
