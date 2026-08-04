import Logo from "@/shared/ui/components/logo";
import ModeToggle from "@/shared/ui/components/mode-toggle";
import CartBtn from "./buttons/cart-btn";
import { useState } from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<header className="bg-background text-text w-full h-14 flex items-center justify-between px-5 md:px-20">
				<Logo />
				<div className="flex gap-3">
					<ModeToggle />
					<div onClick={() => setIsMenuOpen(prev => !prev)}>
						<CartBtn />
					</div>
				</div>
			</header>
			<div className={`bg-neutral-100 dark:bg-neutral-900 ${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} w-full transition-all px-20 pointerevents-none overflow-hidden`}>
				<CartContent />
			</div>
		</>

	);
};

const CartContent = () => {
	return (
		<div className="h-40 py-8 tracking-tight select-none">
			<p className="text-xl">Cart is empty.</p>
		</div>
	)
}

export default Navbar;
