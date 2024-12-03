<script>
	import { goto } from "$app/navigation";

  let email = '';
  let password = '';
  let message = '';
  let name = '';
  let username='';
  let role='';

  const signup = async () => {
    const response = await fetch('http://localhost:5500/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name, username, role }),
    });

    const data = await response.json();

    if (data.success) {
      goto('/login');
    } else {
      message = data.message;
    }
  };
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto hei w-auto" src="favicon.png" alt="Your Company">
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Make your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <p class="txR">{message}</p>
      <form class="space-y-6" method="" on:submit|preventDefault={signup}>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email"  bind:value={email}  name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
          <div class="mt-2">
            <input id="name"  bind:value={name} name="name" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input id="username"  bind:value={username} name="username" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password"   bind:value={password}  name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div style="display: flex; gap:10px">
        <label for="role" class="block text-sm font-medium leading-6 text-gray-900">User Type:</label>
        <select id="type" bind:value={role} name="role" form="postMaker" required>
          <optgroup>
            <option value="citizen">Citizen</option>
            <option value="government">Government</option>
          </optgroup>
        </select>
      </div>
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
        </div>
      </form>
  
      <p class="mt-10 text-center text-sm text-gray-500">
        Already a member?
        <a  href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Log in Now</a>
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