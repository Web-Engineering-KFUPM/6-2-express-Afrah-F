export function getRandomInt(max) {
    if (typeof max !== "number" || max <= 0) return 0;
    return Math.floor(Math.random() * max);
}
