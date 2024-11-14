export const CssCode = `@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
 html, body {
	 height: 100%;
}
 body {
	 align-items: center;
	 background: #642b73;
	 background: linear-gradient(to bottom, #c6426e, #642b73);
	 display: flex;
	 font-family: 'Open Sans', sans;
	 justify-content: center;
	 overflow: hidden;
	 perspective: 1800px;
	 text-align: center;
	 margin: 0 20px;
}
 h1 {
	 color: #3e3e42;
	 font-size: 32px;
	 font-weight: 800;
	 letter-spacing: -1px;
	 margin-bottom: 30px;
	 transform: translateZ(35px);
}
 h3 {
	 color: #eb285d;
	 font-size: 16px;
	 margin-bottom: 6px;
	 transform: translateZ(25px);
}
 .cards {
	 background: #fff;
	 border-radius: 15px;
	 box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.17);
	 display: inline-block;
	 padding: 30px 35px;
	 perspective: 1800px;
	 text-align: left;
	 transform-origin: 50% 50%;
	 transform-style: preserve-3d;
	 transform: rotateX(11deg) rotateY(16.5deg);
	 min-width: 595px;
}
 .card {
	 border-radius: 15px;
	 box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.6);
	 display: inline-block;
	 height: 250px;
	 overflow: hidden;
	 perspective: 1200px;
	 position: relative;
	 transform-style: preserve-3d;
	 transform: translatez(35px);
	 transition: transform 200ms ease-out;
	 width: 175px;
	 text-align: center;
}
 .card:not(:last-child) {
	 margin-right: 30px;
}
 .card__img {
	 position: relative;
	 height: 100%;
}
 .card__bg {
	 bottom: -50px;
	 left: -50px;
	 position: absolute;
	 right: -50px;
	 top: -50px;
	 transform-origin: 50% 50%;
	 transform: translateZ(-50px);
	 z-index: 0;
}
 .card__one .card__img {
	 top: 14px;
	 right: -10px;
	 height: 110%;
}
 .card__one .card__bg {
	 background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_monobg.jpg') center / cover no-repeat;
}
 .card__two .card__img {
	 top: 25px;
}
 .card__two .card__bg {
	 background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_spirited.jpg') center / cover no-repeat;
}
 .card__three .card__img {
	 top: 5px;
	 left: -4px;
	 height: 110%;
}
 .card__three .card__bg {
	 background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlbg.jpg') center / cover no-repeat;
}
 .card__text {
	 align-items: center;
	 background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 100%);
	 bottom: 0;
	 display: flex;
	 flex-direction: column;
	 height: 70px;
	 justify-content: center;
	 position: absolute;
	 width: 100%;
	 z-index: 2;
}
 .card__title {
	 color: #fff;
	 font-size: 18px;
	 font-weight: 700;
	 padding: 0 10px;
	 margin-bottom: 3px;
}
 .notice {
	 background: gold;
	 border-top-left-radius: 6px;
	 bottom: 0;
	 font-family: monospace;
	 font-size: 14px;
	 padding: 8px 10px;
	 position: absolute;
	 right: -20px;
}
 .twitter__link {
	 cursor: pointer;
	 position: absolute;
	 right: -10px;
	 top: 12px;
	 z-index: -1;
	 background: #00aced;
	 border-radius: 20px;
	 height: 30px;
	 text-decoration: none;
	 padding-right: 10px;
	 justify-content: space-between;
	 font-weight: 600;
	 display: flex;
	 align-items: center;
	 color: #fff;
	 font-size: 14px;
	 width: 74px;
	 opacity: 0.4;
}
 .twitter__link:hover {
	 opacity: 1;
}
 .twitter__icon {
	 height: 30px;
}
`;