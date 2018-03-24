
window.addEventListener('load', function() {
    // retreiving html tag from index.html
    // fills the canvas tag with our custom canvas
    var myCanvas = document.getElementById('world');
    var engine = Matter.Engine.create();
    var world = engine.world;

    var height = 800;
    var width = 600;

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
    var x = 250;
    var y = 250;
    var radius = 50;

    var ball = Matter.Bodies.circle(x,y,radius, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: '#F35e66',
            strokeStyle: 'black',
            lineWidth: 1
        }

    });

    var mouseConstraint = Matter.MouseConstraint.create(engine,{
        // create constraint
        element: myCanvas,
        constraint: {
            render: {
                visible: false
            },
            stiffness: 0.8
        }
    });

    var floor = Matter.Bodies.rectangle(250,520,700,40, {
        isStatic: true, // makes the object immovable
        render: {
            visible: false
        }
    });
    Matter.World.add(world, floor);
    Matter.World.add(world, ball);
    Matter.World.add(world, mouseConstraint);

    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);  

    Matter.Engine.run(engine);
    Matter.Render.run(render);
});