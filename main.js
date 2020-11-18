canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=10;
rover_y=10;
rover_height=90;
rover_width=90;
background_img="mars.jpg";
rover_img="rover.png";

function add(){
    background_img1=new Image();
    background_img1.onload=uploadBackground;
    background_img1.src=background_img;


    rover_img1=new Image();
    rover_img1.onload=uploadRover;
    rover_img1.src=rover_img;
}

function uploadBackground(){
 ctx.drawImage(background_img1, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img1, rover_x, rover_y, rover_width, rover_height);
   }

window.addEventListener("keyDown", my_keydown);
function my_keydown(e){
  keypressed=e.KeyCode;


if(keypressed == '38'){
up();
}


if(keypressed == '40'){
down();
}

if(keypressed == '37'){
left();
}

if(keypressed == '39'){
right();
}

}

function up(){
    if (rover_y >=0){

        rover_y-=10;
        uploadBackground();
        uploadRover();

    }
}

function down(){
    if (rover_y <=500){

        rover_y+=10;
        uploadBackground();
        uploadRover();

    }
}

function right(){
    if (rover_x <=700){

        rover_x+=10;
        uploadBackground();
        uploadRover();

    }
}

function left(){
    if (rover_x >=0){

        rover_x-=10;
        uploadBackground();
        uploadRover();

    }
}


