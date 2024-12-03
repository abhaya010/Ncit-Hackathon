<script>
	import Footer from '$lib/Footer.svelte';
    import Navbar from '$lib/Navbar.svelte';
    import Navbar2 from '$lib/Navbar2.svelte';
    import {page} from '$app/stores';
    import '../output.css';

</script>   

{#if $page.url.pathname === '/login' || $page.url.pathname === '/signup'}
<slot />
{:else}
<Navbar />
<div class="slot">
    <slot/>
</div>
<Footer />  
{/if}

<style>
    .slot{
        margin-top: 5vh;
    }
</style>