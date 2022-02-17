import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Subscription } from 'rxjs';
import { CommonService } from '../CommonService';
import { CommonServicea } from '../Commonservice1';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {
// Take The Id That Provided in the url get request then disable all input 
// and put all the things 
does = "enable"
isDisabled = false;
ip = 0
Order: any[]=[];
private sub: Subscription; 
count : any
id =0
food =""
Arr =[{
firstName:"" , 
lastName:"" , 
email:""
 
}]
showPosition(position:any) {
  alert(position.coords.latitude +
 " "+ position.coords.longitude);
 }
 async getIp(){
  await axios.get(" https://ipinfo.io?token=b6ee4628b70b64").then(data=> this.ip = data.data.ip)
}
async getLocation(event:any)
{
event.preventDefault()  
await axios.post("http://localhost:5000/user/getDataIp",{
ip : "41.225.24.89"
}).then(data=> {
this.Arr= data.data
console.log(this.Arr[0].firstName)
})
var Adress = ( <HTMLInputElement>document.getElementById("adress") ) 
if(Adress!=null)
Adress.placeholder="We Fot You The Current Location"
var Email = (<HTMLInputElement>document.getElementById("email")) 
var Name = (<HTMLInputElement>document.getElementById("name")) 
navigator.geolocation.getCurrentPosition(this.showPosition)
this.isDisabled=true ; 
var Name = (<HTMLInputElement>document.getElementById("name"))
var Email = (<HTMLInputElement>document.getElementById("email"))
if(Name!=null){ 
Name.placeholder = this.Arr[0]['firstName']+ +this.Arr[0].lastName 
}
if(Email!=null){
Email.placeholder=this.Arr[0].email
}
  await axios.post("http://localhost:5000/user/getDataIp", {ip:"41.225.24.89"}).then((data:any )=>{
  console.log(data)
  this.id = data.data[0].id
 // Change it later
  })
 await axios.post("http://localhost:5000/user/getDataOrder",{id:this.id}).then((data:any)=>{
 console.log( " This is the data ",data.data[0].orderstring)
 this.food = data.data[0].orderstring
 var Food = (<HTMLInputElement>document.getElementById("food"))
 if(Food!=null)
 Food.placeholder=this.food
 var x = new Set()
 var arr = this.food.split("/")
 for (let i = 0 ; i< arr.length; i ++){
if(arr[i]!=="undefined" && arr[i].length>1) 
x.add(arr[i])  
 }
 console.log(x)
 var Number =  (<HTMLInputElement>document.getElementById("number"))
 if(Number!=null)
 Number.placeholder=x.size.toString()
 })
}
 ngOninit(){
}
 constructor(private Service1: CommonService) {
  this.sub= this.Service1.getUpdate().subscribe
  (x => { //message contains the data sent from service
  alert("Hello")
  console.log(x["text"])
  this.count = x["text"].counter;
  });
 } 
}