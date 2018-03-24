
window.addEventListener('load', function() {
    var myCanvas = document.getElementById('world');
    var world = engine.world;
    var render = Matter.Render.create({
        canvas: myCanvas,
        engine: engine,
        options: {
            width: width,
            height: height,
            background: 'transparent',
            wireframes: false,
            showAngleIndicator: false,
        }
    });
	
});