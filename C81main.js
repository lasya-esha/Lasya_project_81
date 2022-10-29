canvas = document.getElementById("myCanvas");
color1 = "black"
color2 = "red"
color3 = "blue"
color5 = "yellow"
color4 = "green"
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);

canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e)
{
    color = document.getElementById("color").value;

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    circle1(mouse_x , mouse_y);
    circle2(mouse_x , mouse_y);
    circle3(mouse_x , mouse_y);
    circle4(mouse_x , mouse_y);
    circle5(mouse_x , mouse_y);
    rectangle();

}
function circle1(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color1;
    ctx.arc(350 , 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    
}
function circle2(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.arc(450 , 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    
}
function circle3(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color3;
    ctx.arc(250 , 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    
}
function circle4(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color4;
    ctx.arc(400 , 250, 40, 0, 2*Math.PI);
    ctx.stroke();
    
}
function circle5(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color5;
    ctx.arc(300 , 250, 40, 0, 2*Math.PI);
    ctx.stroke();
    
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
function rectangle()
{
    ctx.beginPath();
    ctx.strokeStyle = black;
    ctx.lineWidth = 7;
    ctx.rect(225 , 240, 430, 200);
    ctx.stroke();
    
}