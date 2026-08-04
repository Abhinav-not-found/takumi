import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
	default: "bg-primary text-white",
	ghost: "",
	link: "underline underline-offset-2",
};
const sizes = {
	default: "px-2.5 py-0.5",
	icon:'p-1.5'
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
};

const Button = ({
	children,
	className,
	variant = "default",
	size = "default",
	type = "button",
	...props
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={twMerge(
				clsx(
					"tracking-tighter first-letter:uppercase rounded-sm select-none active:scale-95",
					variants[variant],
					sizes[size],
					className,
				),
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
