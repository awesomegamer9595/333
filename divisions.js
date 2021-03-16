class Divisions {
    constructor(x, y, width ,height) {
        var options = {
            
            friction :0.0,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
};
//class Divisions{
  //  constructor(x, y, width, height) {
    //    var options = {
           
      //      restitution :0.4,
        //    friction :0.0,
          //  isStatic:true
           
        //}
        //this.body = Bodies.rectangle(x, y, width, height, options);
        //this.width = width;
        //this.height = height;
       
     //   World.add(world, this.body);
      //}
      //display(){
       // var angle = this.body.angle;
        //var pos= this.body.position;
       
      // push();    
       // translate(pos.x, pos.y);
        //rotate(angle);
        //rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,this.width, this.height);
        //pop();
   
 //     }
  //}