import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");   
const player = new Player(iframe);

TIME_PLAYER = "videoplayer-current-time";

const onPlay = function(data) {
    console.log(data);
        localStorage.setItem(TIME_PLAYER, JSON.stringify(data.seconds));
}
player.on('timeupdate', throttle(onPlay, 1000));

   player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_PLAYER)) || 0);
   






    