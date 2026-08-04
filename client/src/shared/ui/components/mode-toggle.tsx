import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const ModeToggle = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");

		if (storedTheme === "dark") {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		const nextTheme = !isDark;

		setIsDark(nextTheme);

		if (nextTheme) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<button type="button" onClick={toggleTheme} className="p-1.5 rounded-sm">
			{isDark ? (
				<SunIcon className="size-4.5 hover:text-yellow-400" />
			) : (
				<MoonIcon className="size-4.5 hover:text-blue-600" />
			)}
		</button>
	);
};

export default ModeToggle;
