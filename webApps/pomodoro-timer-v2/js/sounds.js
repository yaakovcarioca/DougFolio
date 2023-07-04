export function Sounds() {
  const forestAudio = new Audio("assets/audio/Floresta.wav");
  const rainAudio = new Audio("assets/audio/Chuva.wav");
  const coffeeShopAudio = new Audio("assets/audio/Cafeteria.wav");
  const firePlaceAudio = new Audio("assets/audio/Lareira.wav");
  const buttonPressAudio = new Audio
  

  

  forestAudio.loop = true;
  rainAudio.loop = true;
  coffeeShopAudio.loop = true;
  firePlaceAudio.loop = true;

  forestAudio.volume = 0.5;
  rainAudio.volume = 0.5;
  coffeeShopAudio.volume = 0.5;
  firePlaceAudio.volume = 0.5;

  return {
    forestAudio,
    rainAudio,
    coffeeShopAudio,
    firePlaceAudio,
    buttonPressAudio,
  };
}