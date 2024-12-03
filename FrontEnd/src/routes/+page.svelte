<script>
	import LeftContainerUser from "$lib/LeftContainerUser.svelte";
	import LeftContainerComp from "$lib/LeftContainerComp.svelte";
	import MidContainer from "$lib/MidContainer.svelte";
  import { onMount } from 'svelte';
	import RightContainer from "$lib/RightContainer.svelte";
  import { usrData } from '../store';
  //$: username = $uName;
  $: username = $usrData.username;

// Read the value from the global store

 
  // let storedUsername = value;
  // const getCookie = () => {
  //   // Read the 'username' cookie
  //   // const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    
  //   // for (const cookie of cookies) {
  //   //   const [name, value] = cookie.split('=');
  //   //   if (name === 'username') {
  //   //     storedUsername = value;
  //   //     break;
  //   //   }
  //   // }
  // };
  // onMount(() => {
  //   // Check if the 'username' cookie exists
  //   // document.cookie = `username=${value}; loggedin=true; expires=1000; path=/`;
  //   //getCookie();
  //   if (storedUsername) {
  //     username = storedUsername;
  //   } else {
  //     // If the cookie doesn't exist, you can set a default value or take some other action
  //     username = 'Guest';
  //   }
  // });
    // let storedToken = localStorage.getItem('token');
  </script>

  <div class="container">
    {#if username === 'Guest'}
    <div class="leftContainer"><LeftContainerComp /></div>
  {:else}
  <div class="leftContainer"><LeftContainerUser /></div>
  {/if}
    <div class="midContainer"><MidContainer /></div>
    <div class="rightContainer"><RightContainer /></div>
  </div>

  <style>
    .container{
      display: flex;
      justify-content: space-between;
      padding: 13px 5%;
      min-height: 100vh;
    }
    .leftContainer{
      background-color: white;
      flex-basis: 25%;
      position: sticky  ;
      top: 70px;
      align-self: flex-start;
  border-radius: 8px;
        min-height: 70vh;
        
    }
    .rightContainer{
      background-color: yellow;
      flex-basis: 25%;
      position: sticky;
      top: 70px;
      align-self: flex-start;
    }
    .midContainer{
      flex-basis: 47%;
    }
  </style>