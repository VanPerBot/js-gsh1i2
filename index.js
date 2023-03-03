let app = new PIXI.Application({ width: 540, height: 523 });
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from('sample.png');
app.stage.addChild(sprite);

// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
