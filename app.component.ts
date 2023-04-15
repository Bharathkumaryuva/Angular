import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //string interpolation
 /*name:string="Bharath";
 age:number=25;
 villege(){
  return'Ramapuram'
 }

 //property binding
 isDisabled:boolean=false
 names:string="Yuva"
 name1:string="Enter Name"
 
 //Event binding
 changes(){
  this.name1="Name Entered"
 }

 change(){
  this.names="Bharath"
 }

 //name:string=""

 //Two way data binding
 name:string=""
 text:string="No name is Entered"

 change(){
  this.text="your name is " +this.name
 }*/

 //Pipes
 name:string="BharathE"
 day=Date()
}


