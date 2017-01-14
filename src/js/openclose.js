 var music = document.createElement('iframe');
music.setAttribute("id","music");
music.setAttribute('src', 'https://www.youtube.com/embed/2ips2mM7Zqw?rel=0&amp;showinfo=0&amp;autoplay=1');
document.body.appendChild(music);

function open_card() {
    document.getElementById('front').className = 'open-card';

  document.body.removeChild(document.getElementById("music"));
}

function close_card() {
    document.getElementById('front').className = '';

}