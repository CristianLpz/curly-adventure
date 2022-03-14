import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

//const myLoader = new Loader();
Loader.shared.add({url: "./battletoad.png", name: "myBattletoad"}) //Para llamar por referencia
Loader.shared.add({url: "./clampy.png", name: "myClampy"})


//function(){} //Esto es parecido al parentesis-flechita
Loader.shared.onComplete.add(()=>{

	const clampy: Sprite = Sprite.from("myBattletoad");

	console.log("Hola mundo! Ancho: ", clampy.width , " Alto: " , clampy.height);
	
	clampy.anchor.set(0);
	
	clampy.x = 0;
	clampy.y = 0;
	
	app.stage.addChild(clampy);

})

Loader.shared.load();