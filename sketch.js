function setup() {
    createCanvas(400, 400);
  background ("black")
  }
  
  function draw() {
    stroke("lightblue")
    fill("gray")
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35)
    }
  }