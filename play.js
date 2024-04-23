if(document.readyState=='loading')
{
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready()
{
    var play=document.getElementsByClassName('play')
    for(i=0;i<play.length;i++)
    {
        var button=play[i]
        button.addEventListener('click',music)
    }
}
function music(event)
{
    var button=event.target
    var playcheck=document.getElementsByClassName('play')
    for(var i=0;i<playcheck.length;i++)
    {
        if(playcheck[i].innerText==0)
        {
            location.reload()
        }
    }
    var moosic=button.parentElement
    var music=moosic.getElementsByClassName('myAudio')[0].innerHTML
    console.log(music)
    var songname=moosic.getElementsByTagName('strong')[0].innerText
    console.log(songname)
    moosic.innerHTML=`<strong>${songname}</strong>
    <button class="btn play">0</button>
    <audio class="myAudio" controls>
    ${music}
    </audio>
    `     
    
}