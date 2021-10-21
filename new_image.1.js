function new_image() {
    fabric.image.fromURL("ball.png", function(Img) {
        ball_obj = Img,
        ball_obj.scaleToWidth(50),
        ball_obj.scaleToHeight(50),
        ball_obj.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_obj);
    });
}
