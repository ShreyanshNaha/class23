class Box{
    constructor(x,y,width,height){
        var objectbox={
            restitution:0.8,
            density:0.5
            
          }
          this.body=Bodies.rectangle(x,y,width,height,objectbox);
          this.width = width;this.height = height;
          World.add(world,this.body);  
    }
    display(){
  rectMode(CENTER); 
  fill (255);
  rect(this.body.position.x,this.body.position.y,50,50);
    }
}