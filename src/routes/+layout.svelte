<script>
	import '../app.pcss';
	import Nav from '$lib/ components/Nav.svelte';
</script>

<div class="">
	<Nav />
	<div class="max-w-3xl mx-auto p-2">
		<slot />
	</div>
</div>
