// Array storage class
let carouselArr = [];

class Carousel {
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    if (arr && arr.length > 0) {
      Carousel._sequence = 0;
      Carousel._size = arr.length;
      Carousel._arr = arr;

      Carousel._carousel = document.getElementById("carousel");

      Carousel._carousel.innerHTML = `
        <button id="prevBtn" class="arrow left">&#10094;</button>
        <img id="carousel-img">
        <button id="nextBtn" class="arrow right">&#10095;</button>
      `;

      Carousel._img = document.getElementById("carousel-img");

      // tempo
      Carousel._time = 5000;

      // funções de controle
      Carousel._start = () => {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(() => Carousel.Next(), Carousel._time);
      };

      Carousel._stop = () => {
        clearInterval(Carousel._interval);
      };

      // MOSTRA PRIMEIRA IMAGEM CORRETAMENTE (SEM BUG DE CLIQUE DUPLO)
      Carousel._render();

      // BOTÕES
      document.getElementById("prevBtn").onclick = () => {
        Carousel._stop();
        Carousel.Prev();
        Carousel._start();
      };

      document.getElementById("nextBtn").onclick = () => {
        Carousel._stop();
        Carousel.Next();
        Carousel._start();
      };

      // HOVER CORRIGIDO (funciona em tudo dentro do carousel)
      Carousel._carousel.addEventListener("mouseenter", Carousel._stop);
      Carousel._carousel.addEventListener("mouseleave", Carousel._start);

      // inicia autoplay
      Carousel._start();
    } else {
      throw "Method Start need an Array.";
    }
  }

  // render separado (corrige o bug do primeiro clique)
  static _render() {
    let item = Carousel._arr[Carousel._sequence];

    Carousel._img.src = "img/" + item.image;

    let titleDiv = document.getElementById("carousel-title");
    titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;
  }

  static Next() {
    Carousel._sequence++;

    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }

    Carousel._render();
  }

  static Prev() {
    Carousel._sequence--;

    if (Carousel._sequence < 0) {
      Carousel._sequence = Carousel._size - 1;
    }

    Carousel._render();
  }
}