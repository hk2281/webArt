var slider;
function setup() {

createCanvas(800, 400);

slider = createSlider(0, TWO_PI, PI/4, 0.01)
}

function draw() {
background(153);  
var a  =  150 ;
angle = slider.value()
console.log(angle) 
translate(400,height);
branch(a);

}

function branch(a){

  line(0,0,0, -a)
  
  translate(0 ,-a)
  if(a>4){

    push();
    rotate(angle);
    branch(a*0.6);
    circle(0,0,angle*2.75)
    pop();
    rotate(-angle);
    branch(a*0.2);
    circle(0, 0, angle*2.56)

  }

}