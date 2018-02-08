import css from './stylesheet.css';
import p5 from 'p5';

new p5();

let current_number = 4;
let max_number = 10000;
let height = 3000;
let width = 3000;

window.setup = function() {
  createCanvas(height,width);
  background(40);
  frameRate(200);
}

window.draw = function() {
    if(current_number > max_number){
        return 0;
    }
  current_number += 1;
  let list_to_display = [];
  let number = current_number;

//   let list_out_of_range = false;
  while(number != 1){
    //   list_out_of_range = !list_out_of_range || number < max_number;
    //   list_out_of_range && 
        list_to_display.push(number);
      number = collatz(number);
  }
//   list_to_display.push(1);
  list_to_display.reverse();
  
  let theta = 0;
  let current_x = width/2;
  let current_y = height/2;

  list_to_display.map((d,p)=>{
    stroke(153);
    theta -= (d%2==0?0.005:-0.005) /2
    let x = current_x - 10*Math.sin(180*theta/Math.PI);
    let y = current_y - 10*Math.cos(180*theta/Math.PI);
    line(current_x,current_y,x,y);
    textSize(5);
    fill(0, 102, 153);
    // text(d, x, y);
    current_x = x;
    current_y = y;
  });


    console.log(current_number, list_to_display);


}

let collatz = function(n) {
    if(n % 2 == 0){
        return n/2;
    }
    else{
        return (3*n+1)/2;
    }
}
