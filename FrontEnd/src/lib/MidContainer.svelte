<script>
  
	import Post from "./Post.svelte";
	import PostInput from "./PostInput.svelte";
  import { onMount } from 'svelte';
  import { uName } from '../store';
  import { usrData } from '../store';
  //$: username = $uName;
  $: username = $usrData.username;

// Read the value from the global store
  let items = Array.from({ length: 10 }, (_, index) => index + 1);

// Read the value from the global store
//let value = $uName;

 
//  let storedUsername = value;
  // const getCookie = () => {
  //   // Read the 'username' cookie
  //   const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    
  //   for (const cookie of cookies) {
  //     const [name, value] = cookie.split('=');
  //     if (name === 'username') {
  //       storedUsername = value;
  //       break;
  //     }
  //   }
  // };
  // onMount(() => {
  //   // Check if the 'username' cookie exists
  //   getCookie();
  //   if (storedUsername) {
  //     username = storedUsername;
  //   } else {
  //     // If the cookie doesn't exist, you can set a default value or take some other action
  //     username = 'Guest';
  //   }
  // });

</script>
<div>
  {#if username != 'Guest'}
<PostInput />
{/if}
{#each items as item (item)}
<Post /> 
{/each}
</div>

<style>
    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>