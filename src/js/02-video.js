import { throttle } from "lodash";

const iframe = document.querySelector('iframe');
console.log(iframe)
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';

function locStorSet(e) { 

    console.log(e.seconds);
    const startSec = Number(e.seconds);
    localStorage.setItem(currentTime, startSec)
};

player.on('timeupdate', throttle (locStorSet, 1000));
player.setCurrentTime(localStorage.getItem(currentTime));
