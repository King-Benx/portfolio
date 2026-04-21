<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Basic -->
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>Benard Asiimwe Bataringaya | Senior Software Engineer</title>

	<meta
		name="description"
		content="Founder & Senior Software Engineer building scalable, high-impact systems across web, mobile, and distributed platforms."
	/>

	<!-- Favicon -->
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />

	<!-- Theme color (mobile browser UI color) -->
	<meta name="theme-color" content="#0f172a" />

	<!-- Open Graph (LinkedIn, WhatsApp, Facebook) -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Benard Asiimwe Bataringaya | Senior Software Engineer" />
	<meta
		property="og:description"
		content="I architect and scale high-impact software systems across web, mobile, and distributed platforms."
	/>
</svelte:head>
{@render children()}
