"use strict";

class Random {
    static value(min, max) {
        const span = max - min + 1;
        const randomNumber = Math.random();
        const rectifiedRandom = Math.floor(min + randomNumber * span);
        return rectifiedRandom;
    }

    static fromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}