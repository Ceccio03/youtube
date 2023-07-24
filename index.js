var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    const start = parseFloat(localStorage.getItem('video-time'));

    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'PkZNo7MFNFg'
    });
}
function goToSecondPage() {
    localStorage.setItem('video-time', player.getCurrentTime() + '');
    window.location = './second.html';
}