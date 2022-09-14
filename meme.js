let pageLoaded = false;
let dvdPlayer;
let enabled = false

const position = {
    x: 0,
    y: 0
};

const velocity = {
    x: 10,
    y: 10
};

const dvdWidth = 200;
const dvdHeight = 108;

const detectCollisions = () => {
    if (position.x + dvdWidth > window.innerWidth) {
        position.x = window.innerWidth - dvdWidth;
        velocity.x *= -1;
    } else if (position.x < 0) {
        position.x = 0;
        velocity.x *= -1;
    }
    if (position.y + dvdHeight > window.innerHeight) {
        position.y = window.innerHeight - dvdHeight;
        velocity.y *= -1;
    } else if (position.y < 0) {
        position.y = 0;
        velocity.y *= -1;
    }
};

const setDVDsize = () => {
    if (enabled) {
        dvdPlayer.style.width = `${dvdWidth}px`;
        dvdPlayer.style.height = `${dvdHeight}px`;
    }
    else {
        dvdPlayer.style.width = `0px`;
        dvdPlayer.style.height = `0px`;
    }
}

const updatePosition = () => {
    if (!dvdPlayer) {
        dvdPlayer = document.getElementById("dvd");
        return;
    }

    setDVDsize();

    position.x += velocity.x;
    position.y += velocity.y;

    detectCollisions();

    dvdPlayer.style.left = `${position.x}px`;
    dvdPlayer.style.top = `${position.y}px`;
};

const gameLoop = () => {
    updatePosition();
};

const onLoad = () => {
    if (pageLoaded) {
        return;
    }
    loaded = true;
    setInterval(gameLoop, 1000 / 60);
};

onLoad();

window.addEventListener("init", onLoad);

document.addEventListener("keydown", (event) => {
    if (event.key==="x"){
        enabled = enabled?false:true;
    }
});