<script>
	import { goto } from "$app/navigation";
  import { onMount } from 'svelte';
  import { uName } from '../store';
  import { usrData } from '../store';
  //$: username = $uName;
   $: username = $usrData.username;

// Read the value from the global store
let value = $uName;
   const provinces = [
      'Koshi', 'Madhesh', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpaschim',
   ]
   let user = 'userName';
   let logged = true;
   let storedUsername = '';



//   const getCookie = () => {
//     // Read the 'username' cookie
//     const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    
//     for (const cookie of cookies) {
//       const [name, value] = cookie.split('=');
//       if (name === 'username') {
//         storedUsername = value;
//         break;
//       }
//     }
//   };
//   onMount(() => {
//     // Check if the 'username' cookie exists
//     getCookie();
//     if (storedUsername) {
//       username = storedUsername;
//     } else {
//       // If the cookie doesn't exist, you can set a default value or take some other action
//       username = 'Guest';
//     }
//   });

</script>

<header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
  <nav class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
   
    <a class="sm:order-1 flex-none text-xl font-semibold loGo" href="/"><img src="favicon.png" class="nepMa" alt="">जनआवाज</a>

    {#if username != 'Guest'}
      <div id="navbar-alignment" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
         <div class="flex flex-col gap-20 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 nepConsMenu">
         <a title="Followed" class="font-medium text-gray-600 hover:text-gray-400 nepCons"  href="/{username}/following"><img src="followed.svg" alt="Followed"></a><div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
            <button id="btnClickonMouse hs-mega-menu-basic-dr" type="button" class="flex items-center w-full  text-gray-600 hover:text-gray-400 font-medium">
            <img src="nep-01.png"class="nepMa"  alt=""><box-icon style="margin-top: 9px;" name='chevron-down' ></box-icon>
            </button>

            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden" >
            {#each provinces as p}
               <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/province/{p}">
               <img src="{p}.png" class="nepMa" alt="">
                  {p}
            </a>
            {/each}
            </div>
         </div>
         <a title="Home" class="font-medium text-gray-600 hover:text-gray-400 nepCons"  href="/"><img src="home.svg" alt="Home"></a>
         <a title="Mention" class="font-medium text-gray-600 hover:text-gray-400 nepCons"  href="/{username}/mentions"><img src="at.svg" alt="Mentions"></a>
         <a title="Issues" class="font-medium text-gray-600 hover:text-gray-400 nepCons"  href="/{username}/issues"><img src="issues.svg" alt="issue"></a>
         </div>
      </div>

      <div class="sm:order-3 flex items-center gap-x-2">
         <button type="button" class="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
         <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
         <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
         </button>
         <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
            <button id="hs-mega-menu-basic-dr" type="button" class="usrIm flex items-center w-full">
            <img src="pic.jpeg" class="usrIm" alt="">
         </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden" style="">
            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/{username}/logout">
               <img src="logout.svg" alt="">
               Logout
            </a>
            </div>
      </div>
      </div>
    {:else}
    <div id="navbar-alignment" class="hs-collapse hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
      <div class="flex flex-col gap-20 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 nepConsMenu">
      {#each provinces as p}
      <a title="{p}" class="font-medium text-gray-600 hover:text-gray-400 nepCons"  href="/province/{p}"><img src="{p}.png" alt="Followed"><p>{p}</p></a>
       {/each}
      </div>
   </div>
   <div class="sm:order-3 flex items-center gap-x-2 marLe">
      <button type="button" class="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
        <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
        <a href="/signup">Sign Up</a>
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
         <a href="/login">Log In</a>
      </button>
    </div>
   {/if}
  </nav>
</header>

<style>
   .marLe{
      margin-right: -2vw;
   }
   .loGo{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: -10%;
      gap: 6%;
      font-size: 1.5rem;
   }

   .loGo img{
      height: 4vh;
      width: auto;
   }
   .nepCons{
      width: 1.5vw;
   }
   .nepMa{
      width: 2.8vw;
   }
   .nepCons img{
      width: 100%;
   }
   .usrIm{position: relative; width: 2.3vw; height: 2.3vw; overflow: hidden; border-radius: 50%; border: 0.5px solid gray;
   }
   .usrIm img{width: 100%; height: auto;
   }
   .nepConsMenu a{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
   }
   header{
      height: 7vh;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      
  box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
  position: fixed;
  top: 0;
   }


</style>




