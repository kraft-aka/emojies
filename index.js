const emojisArray = ['😂', '😎', '😉', '😘', '😜', '😆'];


const randomIndex = Math.floor(Math.random()* emojisArray.length);

const getRandomItem = (arr) => arr[randomIndex];

console.log(getRandomItem(emojisArray))

