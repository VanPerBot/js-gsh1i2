let app = new PIXI.Application({ width: 540, height: 523, background: 101010});
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from('https://cdn.discordapp.com/attachments/1055929322583629916/1081221412024487976/pixil-frame-0.png');
app.stage.addChild(sprite);

// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
