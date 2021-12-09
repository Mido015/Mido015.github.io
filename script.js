const toggleTheme = () => {
	const container = document.getElementById('page');
	container.classList.toggle("dark-theme");

	const theme = localStorage.getItem("theme");
	if (theme === "light" || null) {
		console.log("set theme to light");
		localStorage.setItem("theme", "dark");

	}
	else if (theme = "dark") {
		localStorage.setItem("theme", "light");
	}

}

	window.addEventListener("load", () => {
		const theme = localStorage.getItem("theme");

		if (theme === null) {
			localStorage.setItem("theme", "light");
		}
		if (theme === "dark") {
			const container = document.getElementById("page");
			container.classList.add("dark-theme");
			
		}
	}
