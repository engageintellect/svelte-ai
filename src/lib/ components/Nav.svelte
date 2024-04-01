<script lang="ts">
	import daisyuiColors from 'daisyui/src/theming/themes';
	// import StockMarket from 'virtual:icons/icon-park-solid/stock-market';
	// import ThemeIcon from 'virtual:icons/gridicons/themes';
	import { selectedTheme } from '$lib/store';
	import { onMount } from 'svelte';

	let themes = Object.keys(daisyuiColors);

	// Read the selected theme from local storage or cookies when the component mounts
	onMount(() => {
		const storedTheme = localStorage.getItem('selectedTheme');
		if (storedTheme && themes.includes(storedTheme)) {
			selectedTheme.set(storedTheme);
			document.documentElement.setAttribute('data-theme', storedTheme);
		}
	});

	// Function to handle theme selection
	function handleThemeChange(event: any) {
		const theme = event.target.value;
		selectedTheme.set(theme);
		// Save the selected theme to local storage or cookies
		localStorage.setItem('selectedTheme', theme);
	}
</script>

<div class="shadow sticky top-0 -z-[-1] bg-base-300">
	<div class="navbar bg-base-300 flex justify-between gap-2 max-w-3xl mx-auto">
		<div class="">
			<a href="/" class="btn btn-outline btn-primary text-xl">daisyUI</a>
		</div>

		<!-- <div class="flex items-center gap-2 w-full sm:w-1/2 lg:w-1/3"> -->
		<!-- <div class="form-control w-full"> -->
		<!-- <input type="text" placeholder="Search" class="input input-bordered focus:outline-none" /> -->
		<!-- </div> -->

		<!-- <div> -->
		<!-- <button class="btn btn-primary">Search</button> -->
		<!-- </div> -->
		<!-- </div> -->

		<div class="">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="">
					<!-- Add dropdown icon here -->
					<div class="btn btn-ghost flex items-center gap-2">
						<div class="lowercase font-normal">Theme</div>
						<!-- <ThemeIcon class="h-7 w-7" /> -->
					</div>
				</div>
				<ul
					tabindex="-1"
					class="mt-3 dropdown-content bg-base-100 border-primary rounded-box dropdown-end -z-[-1] h-96 w-52 overflow-auto border p-2 shadow"
				>
					{#each themes.sort() as theme}
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="theme-controller btn btn-sm btn-block btn-ghost font-thin justify-start"
								aria-label={theme}
								value={theme}
								on:change={handleThemeChange}
							/>
						</li>
					{/each}
				</ul>
			</div>

			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							alt="Tailwind CSS Navbar component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
						/>
					</div>
				</div>

				<ul
					class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content border border-primary bg-base-100 rounded-box w-52"
				>
					<li>
						<a href="/" class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a href="/">Settings</a></li>
					<li><a href="/">Logout</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
