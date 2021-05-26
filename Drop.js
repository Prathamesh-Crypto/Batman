class Drop{

    constructor(x,y)
    {

        var options={

            restitution:1.0,
            friction:0.1
        }


        this.body=Bodies.circle(x,y,5,options)
        this.radius=5;
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>580){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,100)})
        }
    }

    display(){
        var pos=this.body.position;
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    

    }



}