<script>
	import { goto } from "$app/navigation";
  import { uName } from '../store';

// Read the value from the global store
let value = $uName;

// Create a writable store
  let email = '';
  let password = '';
  let message = '';

  const login = async () => {
    const response = await fetch('http://localhost:5500/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();   

    if (data.success) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Set expiration to 1 week from now

    document.cookie = `username=${value}; loggedin=true; expires=${expirationDate.toUTCString()}; path=/`;
    // document.cookie = `username=${data.username}; loggedin=true; expires=${expirationDate.toUTCString()}; path=/`;
    
    goto("/");

    } else {
      message = 'Invalid credentials';
    }
  };
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto hei w-auto" src="favicon.png" alt="Your Company">
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <p class="txR">{message}</p>
      <form class="space-y-6" method="" on:submit|preventDefault={login}>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email"  bind:value={email}  name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password"  bind:value={password} name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
        </div>
      </form>
  
      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a  href="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in Now</a>
      </p>
    </div>
  </div>

  <style>
    .hei{
        height: 6.3rem;
    }
    .txR{
      color: red;
    }
    
  </style>