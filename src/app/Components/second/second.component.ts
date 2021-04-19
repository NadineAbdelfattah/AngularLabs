import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  imgsrc:string="assets/1 (1).jpg";
  i:number=0;
  res:any;
  
  constructor() { }
  ngOnInit(): void {
    
  }
  arr=["assets/1 (1).jpg","assets/1 (2).jpg","assets/1 (3).jpg","assets/1 (4).jpg","assets/1 (5).jpg","assets/1 (6).jpg","assets/1 (7).jpg","assets/1 (7).jpg"];


  getNext(){
    this.i=this.i+1;
    this.imgsrc=this.arr[this.i];
    if(this.i>this.arr.length-1){
      this.i=0;
      this.imgsrc=this.arr[this.i];
    }
    
    console.log(this.i);
  }
  getPrevious(){
    
    
    if(this.i>=0){
      this.imgsrc=this.arr[this.i];
      this.i=this.i-1;
    }
    else{
      this.i=this.arr.length-1;
      // this.imgsrc=this.arr[i];
    }
    
  }
  
  startShow(){
    
    this.res=setInterval(()=>{this.getNext()},1000)
  }

  stopShow(){
    clearInterval(this.res);
  }
 
}

