// some variables
const paper = document.querySelector('#paper'),
  pen = paper.getContext('2d');
const pi = Math.PI
const arcs = [
  "#ff0000",
  "#ff8000",
  "#ffff00",
  "#80ff00",
  "#00ff00",
  "#00ff80",
  "#00ffff",
  "#0080ff",
  "#0000ff",
  "#8000ff",
  "#ff00ff",
  "#ff0080"
].map((color, index) => {
  const audio = new Audio(`https://raw.githubusercontent.com/ccjit/my-site/refs/heads/main/poly/note${index}`)
  
  audio.volume = 0.02;
  
  return {
    color, 
    audio
  }
});
let startTime = new Date().getTime();

const draw = () => {
  const currentTime = new Date.getTime(),
        elapsedTime = (currentTime - startTime) / 1000
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;
  const start = {
    x: paper.width * 0.1,
    y: paper.height * 0.9
  }

  const end = {
    x: paper.width * 0.9,
    y: paper.height * 0.9
  }

  const center = {
    x: end.x - start.x,
    y: end.y - start.y
  }
  // set line style
  pen.strokeStyle = "white";
  pen.lineWidth = 6;
  
  // draw line
  pen.beginPath();
  pen.moveTo(start.x, start.y);
  pen.lineTo(end.x, end.y);
  pen.stroke();
  
  const length = end.x - start.x;

  const maxAngle = 2 * pi

  
  
  const spacing = (length / 2 - initialArcRadius) / arcs.length;
  
  arcs.forEach((arc, index) => {
    const arcRadius = initialArcRadius + (index * spacing)
    // draw arc
    pen.beginPath();
    pen.strokeStyle = arc;
    pen.arc(center.x, center.y, arcRadius, pi, 2 * pi) ;
    pen.stroke();
    
    const arcRadius = length * 0.05,
          oneFullLoop = 2 * pi,
          numberOfLoops = 50 - index,
          velocity = (oneFullLoop * numberOfLoops) / 900
          distance = pi + (elapsedTime * velocity),
          modDistance = distance % maxAngle,
          adjustedDistance = modDistance >= pi ? modDistance : maxAngle - modDistance;
  
    const x = center.x + arcRadius * Math.cos(distance),
          y = center.y + arcRadius * Math.sin(distance);
  
    const length = end.x - start.x,
          initialArcRadius = length * 0.05;
    // draw circle
    pen.fillStyle = 'white';
    pen.beginPath();
    pen.arc(x, y, length * 0.0065, 0, 2 * pi) ;
    pen.fill();

    if (distance % pi <= 0.05) {
      arc.audio.play();
    }
  });
  requestAnimationFrame(draw);
}

draw();
