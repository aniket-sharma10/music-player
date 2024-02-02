let progress = document.querySelector('.progress');
let song = document.querySelector('#song');
let ctrlIcon = document.querySelector('#ctrlIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

song.ontimeupdate = function(){
    progress.value = song.currentTime;
}

progress.addEventListener('input', function() {
    song.currentTime = progress.value;
});

ctrlIcon.addEventListener("click", playPause);

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}