let carouselArr = [];


class Carousel {

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url   = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._arr      = arr;
                Carousel._sequence = 0;
                Carousel._size     = arr.length;

                const carouselDiv = document.getElementById("carousel");
                carouselDiv.style.position = "relative";
                carouselDiv.style.textAlign = "center";

                const link = document.createElement("a");
                link.id = "carousel-link";
                link.style.cssText = "display: block; cursor: pointer;";
                carouselDiv.appendChild(link);

                const img = document.createElement("img");
                img.id = "carousel-img";
                img.style.cssText = `
                    display: block;
                    max-width: 100%;
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                `;
                link.appendChild(img);

                const btnPrev = document.createElement("button");
                btnPrev.id = "btn-prev";
                btnPrev.innerHTML = "&#8249;"; // ‹
                btnPrev.style.cssText = `
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 48px;
                    line-height: 1;
                    width: 50px;
                    height: 60px;
                    background: rgba(0,0,0,0.35);
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    z-index: 10;
                    padding: 0;
                `;
                btnPrev.onclick = function(){ Carousel.Prev(); };
                carouselDiv.appendChild(btnPrev);

                const btnNext = document.createElement("button");
                btnNext.id = "btn-next";
                btnNext.innerHTML = "&#8250;";
                btnNext.style.cssText = `
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 48px;
                    line-height: 1;
                    width: 50px;
                    height: 60px;
                    background: rgba(0,0,0,0.35);
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    z-index: 10;
                    padding: 0;
                `;
                btnNext.onclick = function(){ Carousel.NextBtn(); };
                carouselDiv.appendChild(btnNext);

                Carousel.Next();
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const arr  = Carousel._arr;
        const item = arr[Carousel._sequence];

        const img = document.getElementById("carousel-img");
        if(img) img.src = `img/${item.image}`;

        const link = document.getElementById("carousel-link");
        if(link) link.href = item.url;

        const titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }

    static NextBtn() {
        clearInterval(Carousel._interval);
        Carousel.Next();
        Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
    }

    static Prev() {
        clearInterval(Carousel._interval);
        Carousel._sequence = (Carousel._sequence - 2 + Carousel._size) % Carousel._size;
        Carousel.Next();
        Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
    }
};