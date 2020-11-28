function particles(width, height, name) {
  let validArea = [window.innerWidth - width, window.innerHeight - height];
  let element = document.getElementById(name);
  let elementPosition = [element.offsetTop, element.offsetLeft];
  let newW = Math.floor(Math.random() * (validArea[0] - 0));
  let newH = Math.floor(Math.random() * (validArea[1] - 0));

  element.style.position = "absolute";
  element.style.left = newW + "px";
  element.style.top = newH + "px";

  console.log(newW, newH, elementPosition[0], elementPosition[1]);
}
setInterval(function() {
  particles(100, 100, "particles");
}, 1000);
