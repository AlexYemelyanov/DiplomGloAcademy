'use strict';

class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = [],
  }) {
    if (!main || !wrap) {
      console.warn('Slider-carousel: Необходимо 2 свойства, "main" и "wrap"');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.round(100 / this.slidesToShow),
      //widthSlider: Math.round(widthSlide * 5),
    };
    this.responsive = responsive;

  }

  init() {

    this.addGloClass();
    this.addGloStyle();

    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    if (this.responsive) {
      this.responseInit();
    }

  }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('services-slider');

    for (const item of this.slides) {

      item.classList.add('slide-service');

    }
  }

  addGloStyle() {
    let style = document.getElementById('sliderCarousel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }

    style.textContent = `
      .glo-slider{
      position: relative;
       overflow: hidden !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
        z-index:10;
      }
      .services-slider {
        position: relative;
        padding-right: 0!important;
        padding-left: 0!important;
        
        transition: transform 0.2s;
        will-change: transform
        }
      .slide-service{
        align-items: centr;
        justify-content: centr;
        flex: 0 0 ${this.options.widthSlide}% !important;
        padding-right: 0!important;
        padding-left: 0!important;
        margin-left:  0 !important;
        margin-right:  0 !important;
      }
       .slide-service img{
         
        margin-left:  0 !important;
        margin-right:  0 !important;
      }

      .slide-service h6{
  
        color: #2e2e2e;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px
      }

      .slide-service p{
   
        color: #616161;
        font-size: 14px;
        font-weight: 300;
        line-height: 18px;
        padding-left: 10px;
        padding-right: 10px;
        max-width: 200px;
        margin: 0 auto
      }
    `;
    document.head.appendChild(style);

  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this))
    this.next.addEventListener('click', this.nextSlider.bind(this))
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position = this.slides.length - this.slidesToShow)
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }

  }

  nextSlider() {
    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
      ++this.options.position;
      if (this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }

  }

  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'service-arrow prevs';
    this.next.className = 'service-arrow nex';

    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);

    const style = document.createElement('style');

    style.textContent = `
       .service-arrow {
          position: absolute;
          top: 75px;
          margin-top: -18px;
          z-index: 100;
          cursor: pointer;
          display: block;
          width: 36px;
          height: 37px;
          background-color: #f4c71b;
          background-repeat: no-repeat;
          border-radius: 50%;
          text-align: center;
          padding-top: 11px
        }


        .prevs {
          left: 0px;
          background-image: url(../images/arrow-left.png);
          background-position: 50% 50%
          
        }

        .nex {
          right: 0px;
          background-image: url(../images/arrow-right.png);
          background-position: 50% 50%
          
        }
    `;
    document.head.appendChild(style);
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);

    const maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slideToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addGloStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addGloStyle();
      }
    };
    checkResponse();

    window.addEventListener('resize', checkResponse())

  }
}