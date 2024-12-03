<script>
    
  import { usrData } from '../store';
  $: username = $usrData.username;
  $:name = $usrData.name;
  $:flwer = $usrData.flwrs;
  $:flwin =$usrData.flwin;
  $:psts = $usrData.psts;
  $:desc =  $usrData.desc;
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="usrDetail">
    <div class="usrImg">
        <img src="pic.jpeg" alt="user">
    </div>
    <div class="usrName">
        <p>
            {name}
            <br />
            <small><a href="/">@{username}</a></small>
    </div>
    <div class="usrStats">
        <div class="flwrs"><p>{flwer}</p><small>Followers</small></div>
        <div class="flwin"><p>{flwin}</p><small>Following</small></div>
        <div class="uspst"><p>{psts}</p><small>Posts</small></div>
    </div>
    <div class="usrDesc">
        <p>{desc}</p>
    </div>
    <hr />
    <div class="usrLoc">
        <span>जनआवाज "जनताको आवाज - Voice of the People" </span><span>Copyright © 2024|| Project By: A2S2</span>
    </div>
</div>

<style>
    .usrDetail{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 5% 10%;
        gap: 20px;
    }
    .usrImg{
        position: relative; 
        width: 13vw; 
        height: 13vw; 
        overflow: hidden; 
        border-radius: 50%; 
        border: 10px solid rgb(229, 243, 255);
    }
    .usrName{
        font-size: 1.35rem;
        text-align: left;
    }
    .usrStats{
        display: flex;
        width: 70%;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;
        text-align: center;
    }
    hr{
        width: 100%;
        height: 0.5vh;
        background-color: rgb(229, 243, 255) ;
        border-radius: 100px;
    }

    .usrLoc{
        text-align: center;
    }

</style> 