function load_img() {
	fabric.Image.fromURL("golf-h1.png", function (img) {
		hole_obj = Img;
		hole_onj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(hole_obj);
	});

	new_image();
}
