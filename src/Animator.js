"use strict";

class Animator {
    constructor(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;

        this.animations = [];

        this.eventDispatcher.on("damage", (data) => { this.addDamageAnimation(data); });
        this.eventDispatcher.on("boostPA", (data) => { this.addBoostPAAnimation(data); });
        this.eventDispatcher.on("attack", (data) => { this.addAttackAnimation(data); });
    }
    addAttackAnimation(data) {
        this.animations.push({
            type: "attack",
            entity: data.entity,
            elapsed: 0,
            end: Settings.attackAnimationDuration,
        });
    }
    addDamageAnimation(data) {
        this.animations.push({
            type: "damage",
            entity: data.entity,
            damage: data.damage,
            elapsed: 0,
            end: Settings.damageAnimationDuration,
            delay: Settings.damageAnimationDelay,
        });
    }
    addBoostPAAnimation(data) {
        const particles = [];
        for (let index = 0; index < 15; index++) {
            const particle = { x: Random.value(-64, 64), y: Random.value(-64, 64), speed: Random.value(25, 65) };
            particles.push(particle);
        }
        this.animations.push({
            type: "boostPA",
            entity: data.entity,
            elapsed: 0,
            end: Settings.damageAnimationDuration,
            particles: particles
        });
    }
    update(deltaTime) {
        this.animations.forEach((animation) => {
            animation.elapsed += deltaTime;
        });
        // on ne garde que les animations non-terminées
        this.animations = this.animations.filter((animation) => { return animation.elapsed < animation.end; });
    }
    static animate(position, destination, speed, deltaTime) {
        // very basic linear movement animation, position gradually changes towards destination
        const dx = destination.x - position.x;
        const dy = destination.y - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const velocityX = Math.cos(angle);
        const velocityY = Math.sin(angle);
        if (distance > 1) {
            const step = Math.min(distance, deltaTime * speed);
            position.x += step * velocityX;
            position.y += step * velocityY;
        } else {
            position.x = destination.x;
            position.y = destination.y;
        }
    }
}