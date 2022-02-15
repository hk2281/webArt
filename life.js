
let balls=[]

class human{
  constructor(d){
    this.speedx = 0.3
    this.speedy = 0.3
    //this.isIll
    d>1 ? this.isIll = false : this.isIll = true
    
    this.size = 7
    this.azimutPointx = random(0,width)
    this.azimutPointy =  random(0,height)
    this.px =random(0,width)
    this.py = random(0,height)
  }
  setPoint(){
    let randAngle = random(0,5)
    this.azimutPointx = 50 * cos(randAngle)+this.px
    this.azimutPointy = 50 * sin(randAngle)+this.py
    this.speedx = this.speedy = random(0.1,0.3)
     
    if(this.azimutPointx>width||this.azimutPointx<0 || this.azimutPointy>height ||this.azimutPointy<0){
      this.azimutPointx = 50 * cos(randAngle)+this.px
      this.azimutPointy = 50 * sin(randAngle)+this.py
      this.speedx = this.speedy = random(0.1,0.3)
    }
  }
  randomPointOfCircle(){
    let randRad = random(50,70)
    let randAng = random(0,361)
    this.px = randRad*cos(randAng)+(width/2)
    this.py = randRad*sin(randAng)+(height/2)

  }
  
  movement(){
    var angle = atan2(this.azimutPointx-this.px,this.azimutPointy-this.py)
    this.px +=this.speedx*sin(angle)
    this.py +=this.speedy*cos(angle)
    
    
    if(this.px > width-this.size || this.px< this.size){
      //this.randomPointOfCircle()
        this.speedx *= -1; 
        
    }
    if(this.py > height-this.size || this.py < this.size){
      //this.randomPointOfCircle()
      this.speedy *= -1; 
      
    }
    if(this.px >( width+10) || this.px < -10 || this.py > (height+10) || this.py<-10 ){
      this.randomPointOfCircle()
      this.setPoint()
    }
  
    if(this.azimutPointx-this.px<1 && this.azimutPointy-this.py<1 ){
      //this.randomPointOfCircle()
    this.setPoint();
    }
  }
  display(){
    if(this.isIll){
      fill(color(255, 0, 0));
    }
    else{
      fill(color(0,255,0))
    }
    circle(this.px,this.py,this.size);
  }
}


function setup(){
  createCanvas(200,200);
    azimutPointy = azimutPointx = 200
    for (let i = 0; i < 1; i++) {
      balls[i] = new human(random(0,10));
    }
    console.log(balls)
}

function draw(){
  background(153);
  balls.forEach(human => {
    human.movement()
    human.display()
    //console.log(human.px,human.py)
  });
  
}




