
var canvas= new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_x=800;
hole_y=400;


block_image_width = 5;
block_image_height = 5;

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
	}
	document.getElementById("hd3").innerHTML="YOU HIT THE GOAL!";
	document.getElementById("myCanvas").style.borderColor="red";
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if ball_y>=450{
			ball_y=ball_y+block_image_height;
			console.log("block image hight =" +block_image_height);
			console.log("when down arrow key is pressed, x="+ball_x+"y="+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		 if ball_y<=450{
			 ball_y=ball_y+block_image_height;
			 console.log("block image height =" +block_image_height);
			 console.log("when down arrow key is pressed, X="+ball_x+" , y ="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		 }

	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_image_height;
			console.log("block image height + " + block_image_height);
			console.log("when left arrow key is pressed,x= " +ball_x+"y="+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x-block_image_height;
			console.log("block image height + "+ball_x+"y="+ball_y);
			console.log("when left arrow key is pressed, x ="+ball_x+"y="+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

