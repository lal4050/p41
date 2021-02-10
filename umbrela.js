class umbrela {
    constructor(x, y,r) {

        var options ={
           // 'restitution':0.8,
            isStatic: true
            
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);

        this.image=loadImage("walking_1.png");

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        imageMode(RADIUS);
        image(this.image,0, 0, this.r,this.r);
        pop();
    }

};