var mouseEvent = "empty";
var lastpositionof_x, lastpositionof_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthofline = 1;
    canvas.addEventListener("mousedown",my_md);
    function my_md(e)
    {
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mv);
    function my_mv(e)
    {
        cpx = e.clientX - canvas.offsetLeft;
        cpy = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastpositionof_x + "y = " + lastpositionof_y);
        ctx.moveTo(lastpositionof_x, lastpositionof_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + cpx + "y = " + cpy);
        ctx.lineTo(cpx, cpy);
        ctx.stroke();
        }

        lastpositionof_x = cpx; 
        lastpositionof_y = cpy;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }
