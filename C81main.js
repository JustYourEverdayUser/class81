canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "black";
canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
    color = document.getElementById("color_input").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 35, 0, 2*Math.PI);
    ctx.stroke();
}
function clear_canvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}