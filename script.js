console.log("Welcome To Spotify")
// Initilize the varibles
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');


let songs = [
    {songName: "tujhe sochta hu", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "tujhe sochta hu", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "tujhe sochta hu", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "tujhe sochta hu", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "tujhe sochta hu", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "tujhe sochta hu", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "tujhe sochta hu", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
]
// audioElement play

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.pausyed || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause;
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-solid fa-play');
        gif.style.opacity = 0;
    }
    
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    
})
myProgressBar.addEventListener('change' , ()=>{
    
})