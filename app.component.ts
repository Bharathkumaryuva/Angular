import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 /*name:string="Bharath";
 age:number=25;
 villege(){
  return'Rampuram'
 }
 isDisabled:boolean=false
 names:string="Yuva"
 name1:string="Enter Name"
 
 changes(){
  this.name1="Name Entered"
 }

 change(){
  this.names="Bharath"
 }*/

 //name:string=""

 name:string=""
 text:string="No name is Entered"

 change(){
  this.text="your name is " +this.name
 }
}
