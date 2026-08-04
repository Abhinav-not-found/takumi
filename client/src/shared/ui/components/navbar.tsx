import Button from "@/shared/ui/components/button";
import Logo from "@/shared/ui/components/logo";

const Navbar = () => {
	return (
		<header className="bg-background text-text h-14 flex items-center justify-between px-20">
			<Logo />
			<Button>test</Button>
		</header>
	);
};

export default Navbar;
