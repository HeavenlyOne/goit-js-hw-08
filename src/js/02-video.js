import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    
});

function addingToLS (data) {
   localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds) )
}

player.on('timeupdate', throttle(addingToLS, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

