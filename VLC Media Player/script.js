const speedUp=document.querySelector("#speed-up");
const speedDown=document.querySelector("#speed-down");
const volUp=document.querySelector("#vol-up");
const volDown=document.querySelector("#vol-down");

const speedUpHandler=function(){
  alert("speed up was clicked");
}
const speedDownHandler=function(){
    alert("speed down was clicked");
}
const volUpHandler=function(){
    alert("volume up was clicked");
}
const volDownHandler=function(){
    alert("volume down was clicked");
}

speedUp.addEventListener("click", speedUpHandler);
speedDown.addEventListener("click", speedDownHandler);
volUp.addEventListener("click", volUpHandler);
volDown.addEventListener("click", volDownHandler);

const openBtn=document.querySelector(".open-btn");
const openFile=document.querySelector(".video-input");

const fileOpenHandler=function(){
    openFile.click();
}

openBtn.addEventListener("click",fileOpenHandler);

const main=document.querySelector(".content");

const acceptInputHandler=function(obj){
    const selectedFile=obj.target.files[0];
    const linkFile = URL.createObjectURL(selectedFile);
    const video=document.createElement("video");
    video.src=linkFile;
    video.play();
    video.setAttribute("class","videoFile");
    // video.controls="true";
    // video.muted="true";
    main.appendChild(video);
    video.volume=70;
}

openFile.addEventListener("change",acceptInputHandler);