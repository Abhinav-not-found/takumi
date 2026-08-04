import { Outlet } from "react-router";
import Navbar from "@/shared/ui/components/navbar";

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default MainLayout;
