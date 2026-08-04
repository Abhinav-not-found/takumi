import Button from "@/shared/ui/components/button";
import Logo from "@/shared/ui/components/logo";
import ModeToggle from "@/shared/ui/components/mode-toggle";

const Navbar = () => {
	return (
		<header className="bg-background text-text h-14 flex items-center justify-between px-20">
			<Logo />
			<div className="flex gap-4">
				<ModeToggle />
				<Button>test</Button>
			</div>
		</header>
	);
};

export default Navbar;
