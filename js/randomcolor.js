 function randomeColor() {
    let c = "#";
    for (let i = 0; i < 6; i++) {
        c += (Math.random() * 16 | 0 ).toString(16);
    }
    return c;
 }

 document.getElementById('sp-color').style.color = randomeColor();
 const spacialColors = document.getElementsByClassName('sp-color');
 
 for (const spacialColor of spacialColors) {
    spacialColor.style.backgroundColor = randomeColor();
 }