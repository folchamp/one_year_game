"use strict";

class Animator {
    constructor() {

    }
    static animate(position, destination, speed, deltaTime) {
        const dx = destination.x - position.x;
        const dy = destination.y - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const velocityX = Math.cos(angle);
        const velocityY = Math.sin(angle);
        if (distance > 1) {
            const stepX = Math.min(distance, deltaTime * speed);
            const stepY = Math.min(distance, deltaTime * speed);
            position.x += stepX * velocityX;
            position.y += stepY * velocityY;
        } else {
            position.x = destination.x;
            position.y = destination.y;
        }
    }
}