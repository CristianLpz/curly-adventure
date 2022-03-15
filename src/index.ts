//import { deprecation } from '@pixi/utils';
import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	console.log("resized!");
	
	//Esto es para poder escalar el juego
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.width;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeigt = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor(window.innerWidth - gameWidth) / 2;
	const marginVertical = Math.floor(window.innerHeight - gameHeigt) / 2;

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeigt + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px"; 

	/*
	app.screen.width //640
	app.screen.height //480
	window.innerWidth; // lo que el navegador diga
	window.innerHeight;
	*/
})

window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./battletoad.png", name: "toad"}) //Para llamar por referencia
Loader.shared.add({url: "./clampy.png", name: "myClampy"})
Loader.shared.add({url: "./hat.png", name: "hat"})

Loader.shared.onComplete.add(()=>{
	
	const toad: Sprite = Sprite.from("toad");

	toad.scale.set(5);
	
	const hat: Sprite = Sprite.from("hat");
	
	hat.scale.set(0.2);
	hat.position.set(286,153);
	
	const toadWihtHat: Container = new Container();
	
	toadWihtHat.addChild(toad);
	toadWihtHat.addChild(hat);

	toadWihtHat.scale.set(0.8);
	toadWihtHat.x = 100;
	toadWihtHat.y = 100; 

	console.log(hat.toGlobal(new Point()));
	console.log(hat.parent.toGlobal(hat.position));

	const aux = hat.parent.toLocal(new Point(640,360));
	hat.position.x = aux.x;
	hat.position.y = aux.y; 


	app.stage.addChild(toadWihtHat);
	




	//const myLoader = new Loader();
	
	//function(){} //Esto es parecido al parentesis-flechita
	
	//toad.anchor.set(0);	
	
	//console.log("Hola mundo! Ancho: ", toad.width , " Alto: " , toad.height);
	
	/*
	toad.x = 100;
	toad.y = 100;
	
	toad.scale.x = 5;
	toad.scale.y = 5;
	*/
	
	//toad.angle = -45;
	
	/*
	hat.scale.set(0.2,0.2);
	hat.position.set(386,253);
	*/

})

Loader.shared.load();