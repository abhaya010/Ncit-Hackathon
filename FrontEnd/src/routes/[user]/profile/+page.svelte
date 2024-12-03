<script>
    let username = '';
  
    const getCookies = () => {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  
      // Find and extract the 'username' cookie
      const usernameCookie = cookies.find(cookie => cookie.startsWith('username='));
  
      if (usernameCookie) {username = usernameCookie.split('=')[1];}
    };
  
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
    // Call getCookies when the component is mounted
    import { onMount } from 'svelte';
    onMount(getCookies);
  </script>
  
    {#if username != ''}
    <h1>Username: {username}</h1>
    {:else}
        {goto("/")}
    {/if}