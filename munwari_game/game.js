
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const moveSound = document.getElementById("moveSound");

let player = { x: 50, y: 50, size: 50, color: "#C68642", speed: 5 };
let controls = { up: false, down: false, left: false, right: false };

function gameLoop() {
    ctx.clearRect(0, 0, width, height);

    if (controls.left) { player.x -= player.speed; moveSound.play(); }
    if (controls.right) { player.x += player.speed; moveSound.play(); }
    if (controls.up) { player.y -= player.speed; moveSound.play(); }
    if (controls.down) { player.y += player.speed; moveSound.play(); }

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);

    requestAnimationFrame(gameLoop);
}

// التحكم باللمس
["up", "down", "left", "right"].forEach(dir => {
    const btn = document.getElementById(dir);
    btn.addEventListener("touchstart", () => controls[dir] = true);
    btn.addEventListener("touchend", () => controls[dir] = false);
});

gameLoop();
