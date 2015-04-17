

    var audio = document.getElementById("gamemusic")
    
    audio.play();
    audio.loop = true;
    
    function ChangeAudio()
    {
        audio.pause();        
        audio.src = "Assets/Music/Level1music.mp3";
        audio.volume = 0.5;
        audio.play();
        
    }
    
    function MuteAudio()
    {
        var ismuted = false;
        if(ismuted)
        {
            audio.muted = false;
            ismuted = false;
        }
        else if(!ismuted)
        {
            audio.muted = true;
            ismuted = true;
            
        }
    }

  

