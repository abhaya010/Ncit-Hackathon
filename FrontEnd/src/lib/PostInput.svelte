<script lang="ts">
  type data = {
    username:string;
    name:string;
  }
    import { usrData } from '../store';
    
  $: usrDat = {
    username: $usrData.username,
    name: $usrData.name
  };
    let text = '';
    let pType = '';
    let username = '';
    let province = '';
    let message = '';
    let charCount = 0;
    const limit = 300;
  
    function checkCharacterLimit() {
      // Check if the length exceeds the limit
      if (text.length > limit) {
        // Trim the text to the specified limit
        text = text.slice(0, limit);
  
        // Update the character count display
        charCount = 0;
      } else {
        // Update the character count display
        charCount = limit - text.length;
      }
    }
  
    function disableEnterKey(event: KeyboardEvent) {
      // Check if the pressed key is Enter (key code 13)
      if (event.key === 'Enter') {
        // Prevent the default behavior (adding a new line)
        event.preventDefault();
      }
      

    }

  const posT = async () => {
    const response = await fetch('http://localhost:5173/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, text, pType, province, username}),
    });

    const data = await response.json();

    if (data.success) {
    } else {
      message = data.message;
    }
  };
  </script>
  
<div class="writePost">
    <div class="usrPro">
        <div class="usrImg">
        <img src="pic.jpeg" alt="usrImg" />
        </div>
      <div>
        <p>
          {usrDat.name}
          <br />
          <small><a href="/">@{usrDat.username}</a></small>
        </p>
      </div>
    </div>
    <div class="postInput">
      <form method="" on:submit|preventDefault={posT}>
      <textarea 
        rows="4"
        placeholder="Give your voice"
        id="myTextarea" bind:value={text} on:input={checkCharacterLimit} on:keydown={disableEnterKey}
        required
      ></textarea>
      <div class="addPostLink">
        <p>Characters remaining: {charCount}/{limit}</p>
  <p>{message}</p>
        
          <select id="type" name="type" form="postMaker" bind:value={pType} required >
            <optgroup>
              <option value="" disabled selected hidden>Post Type :</option>
              <option value="postN">Post</option>
              <option value="issue">Issue</option>
              <option value="response">Response</option>
            </optgroup>
          </select>
          <select id="province" name="province" form="postMaker" bind:value={province} >
            <optgroup>
              <option value="" disabled selected hidden>Province:</option>
              <option value="provinceone">Province One</option>
              <option value="madhesh">Madhesh</option>
              <option value="bagmati">Bagmati</option>
              <option value="gandaki">Gandaki</option>
              <option value="lumbini">Lumbini</option>
              <option value="karnali">Karnali</option>
              <option value="sudurpaschims">Sudurpaschim</option>
            </optgroup>
          </select>
        <button type="submit" class="btn">Post</button>
      </div>
    </form>
      </div>
    </div>

  <style>
    .writePost {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  color: #626262;
  box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
}

a {
  text-decoration: none;
}

.usrPro {
  display: flex;
  align-items: center;
}
.usrPro p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #626262;
}

.usrPro small {
  font-size: 1rem;
  color: #626262;
}
.usrImg{
        position: relative; 
        width: 3vw; 
        height: 3vw; 
        overflow: hidden; 
        border-radius: 50%; 
        border: 2px solid rgb(229, 243, 255);
        margin-right: 10px;
    }

    .usrImg img{
      widows: 100%;
      height: auto;
    }
.postInput {
  padding-left: 55px;
  padding-top: 20px;
}
.postInput textarea {
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ccc;
  resize: none;
}
.postInput textarea::placeholder {
  font-size: 1rem;
}
.addPostLink {
  display: flex;
  margin-top: 10px;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
}
.addPostLink select {
  align-items: center;
  color: #626262;
  font-size: 1rem;
}


.addPostLink select {
  border: none;
  font: 1rem;
}

.btn {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Courier New;
  color: #ffffff;
  font-size: 20px;
  background: #626262;
  padding: 6px 20px 6px 20px;
  border: solid #626262 1px;
  text-decoration: none;
}

.btn:hover {
  background: #ffffff;
  text-decoration: none;
  color: #626262;
}

  </style>