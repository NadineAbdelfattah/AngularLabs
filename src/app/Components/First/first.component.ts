
import { Component } from '@angular/core';


@Component({
  selector:"app-first",
  templateUrl:"./first.component.html",
  styleUrls:["./first.component.css"]
})
export class FirstComponent{
  name:string="";

  clickMe(){
    this.name="Default"
  }

  Change(x:any){
      // console.log(data.target.value);
      this.name=x.target.value;
  }
}
