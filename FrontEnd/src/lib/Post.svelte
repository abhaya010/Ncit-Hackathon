<script>
  import { onMount } from 'svelte';
    
    import { pstData } from '../store';
    $: username = $pstData.uData.username;
    $:name = $pstData.uData.name;
    $:time = $pstData.pTime;
    $:txt = $pstData.pTxt;

   let error = null;

  // const fetchUserData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5173/user'); // Replace with your actual backend endpoint
  //     const data = await response.json();
  //     userData.text = data;
  //     userData.user = data;
  //     userData.link = data;
  //     userData.date = data;
  //     userData.like = data;
  //     userData.dlike = data;
  //   } catch (err) {
  //     console.error('Error fetching user data:', err);
  //     error = 'An error occurred while fetching user data.';
  //   }
  // };

  // onMount(() => {
  //   fetchUserData();
  // });
</script>

<div class="showPost"> 
    <div class="usrPro">
      <div class="usrImg">
      <img src="pic.jpeg" alt="usrImg" />
    </div>
      <div>
        <p>
          {name}
          <br />
          <small><a href="/">@{username}</a></small>
          <small class="date">|| {time}</small>
        </p>
      </div>
    </div>
    <div class="postText">{txt}
    </div>
    <hr />
    <br>
    <div class="reaction">
      <div class="lks">
        <img
          style="cursor: pointer"
          class="btn"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAd5JREFUSEuVlatOBTEQhr9BIXEYIAHDzcMzYAkOzwscx0VxEgiCF8AiSTC8AI7gDwF3AhKJIMEUetvObttlT9VuO52Z/59/piKAwa705X4ry1nVTAv7dqvuO1zodRoSyRJVd/sS7kYfASfAJXCVArczEUzDikegl4YZPIQLh8CtQrMKTD2zQnLahiQamjMqX9gDHoA5lcsK8OH/s6wasxaCMteyA+bxj5Z55co6tgEKS9PlQ/etdZAnMAvRKCQxxshZ1N9/qisgbLJ4x8hywdEm8Joc99RART8AxoDNWpzTUJRUm0yTJYG8AafAXaQ0Gk2ALeXCfroeHNaCLRJfELZ9jslDFJCVnQTZBRPf69a8Kse8w51vXeToRe/rvYSlILeCUMUlpA6GB6jJJil0asA2YpsidS8iyxDUKNIxBUYGrjOKVFd7FWVFrozLVCJbvy8wi8C3r1laVYpmUxEXwHESRTFA6IMhMm1X9wfDEvAZtd2PICO8d6zYwxvgKEm/RZGYNBKGIehQZylecyO8oBYrqAmYQie3OdBjo6P9ewP7XYyaIjuLzhE2mk4OFOk3I8yobP4J7BrhOTxlqvM7cNS8aE5qKtINnb4774HObvaapuxqb5qiqG7SG7i3SYRfSzbGIKLRgCkAAAAASUVORK5CYII="
          alt="Like"
        />
        <p>Like</p>
      </div>
      <!-- <p><a href="/">Comment</a></p> -->
    </div>
  </div>

  <style>
    .lks{
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .showPost {
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
.usrImg{
        position: relative; 
        width: 3vw; 
        height: 3vw; 
        overflow: hidden; 
        border-radius: 50%; 
        border: 2px solid rgb(229, 243, 255);
        margin-right: 10px;
    }
.usrPro p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #626262;
}

.usrPro small {
  font-size: 1rem;
  color: rebeccapurplex;
}

.usrPro .date {
  font-size: 0.8rem;
  color: black;
}

hr {
  width: 95%;
  color: #626262;
  margin-top: 20px;
}

.postText {
  padding: 0 7%;
  font-size: 1.1rem;
}

.btn {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  background: #ffffff;
  padding: 1%;
  border: solid #626262 1px;
  text-decoration: none;
  width: 1.2rem;
  height: 1.2rem;
}

.btn:hover {
  background: #d5d5d5;
  text-decoration: none;
}

.reaction {
  padding: 0 2%;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.2rem;
  margin: -15px 0;
}


  </style>