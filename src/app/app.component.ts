import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = "sunny sood";
  today = Date.now();
  str = "hello angular";
  money = 100;


  namee="";
  parentFunction(data: any){
    console.warn(data);
    this.namee=data.namee;
  }

  model = {
    left: true,
    middle: false,
    right: false
  };
  
  //data = "bruce";
  users = [
    {
    name:'sunny',
    age:36,
    email:'sunny1may@gmail.com'
    },
    {
      name:'shilpa',
      age:33,
      email:'shilpa@test.com'
    },
    {
      name:'shobhit',
      age:2,
      email:'shobhit@test.com'
    }
  ]

  getUserValue(value: any){
    console.warn(value);
  }

  color = "orange";
  err = true;
  updateColor(){
    this.color="gray";
  }

  show = "blue";

  dat = ['a','b','c','d'];
  /*data = [
    {
      name:'sunny',
      age:36,
      email:'sunny1may@gmail.com'
    },
    {
      name:'shilpa',
      age:33,
      email:'shilpa@test.com'
    },
    {
      name:'shobhit',
      age:2,
      email:'shobhit@test.com'
    }
  ]*/

  //name = "sunny - _ + sood";
  disabledBox = true;
  enableBox(){
    this.disabledBox=false;
  }

  currentVal = "";
  getVal(val: any){
    console.warn(val);
    this.currentVal=val;
  }

  appName = "Learning Angular";
  //name = "sunny";
  getName(name: any){
    //return this.name;
    //alert("this is sunny");
    alert(name);
  }
  obj={
    name:'shilpa',
    age:33
  }
  arr=['shilpa','shobhit','sunny sood'];
  a=100;
  b=200;

  myEvent(evt: any){
    console.warn(evt);
  }

}
