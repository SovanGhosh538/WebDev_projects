const speedUp=document.querySelector("#speed-up");
const speedDown=document.querySelector("#speed-down");
const volUp=document.querySelector("#vol-up");
const volDown=document.querySelector("#vol-down");

const speedUpHandler=function(){
  const video=document.querySelector("video");
  if(video===null)
    return;
  if(video.playbackRate === 2)
    return;
  const increaseSpeed=video.playbackRate + 0.25;
  video.playbackRate=increaseSpeed;
  // Toast
  toast.textContent=increaseSpeed+"X";
  toast.style.display="block";
  setTimeout(function(){
      toast.style.display="none";
  },2000);
}
const speedDownHandler=function(){
    const video=document.querySelector("video");
    if(video===null){
        return;
    }
    if(video.playbackRate === 0)
        return;
    const decreaseSpeed=video.playbackRate - 0.25;
    video.playbackRate=decreaseSpeed;
    // Toast
    toast.textContent=decreaseSpeed+"X";
    toast.style.display="block";
    setTimeout(function(){
        toast.style.display="none";
    },2000);
}
const volUpHandler=function(){
    const video=document.querySelector("video");
    if(video === null)
        return;
    if(video.volume === 1)
        return;
    const increaseVol = video.volume + 0.2;
    video.volume = increaseVol;
    // Toast
    toast.textContent=(increaseVol*100)-((increaseVol*100)%10)+"%";
    toast.style.display="block";
    setTimeout(function(){
        toast.style.display="none";
    },2000);
}
const volDownHandler=function(){
    const video=document.querySelector("video");
    if(video === null)
        return;
    if(video.volume < 0.2)
        return;
    const decreaseVol = video.volume - 0.2;
    video.volume = decreaseVol;
    // Toast
    toast.textContent=(decreaseVol*100)-((decreaseVol*100)%10)+"%";
    toast.style.display="block";
    setTimeout(function(){
        toast.style.display="none";
    },2000);
}
const toast=document.querySelector(".toast");

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
}

openFile.addEventListener("change",acceptInputHandler);