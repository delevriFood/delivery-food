import { Component, OnInit } from '@angular/core';
import axios from 'axios';
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
showPosition(position:any) {
  alert(position.coords.latitude +
 " "+ position.coords.longitude);
 }
 async getIp(){
  await axios.get(" https://ipinfo.io?token=b6ee4628b70b64").then(data=> this.ip = data.data.ip)
}
getLocation(event:any)
{
event.preventDefault()  
axios.post("http://localhost:5000/user/getData",{
ip : this.ip.toString()
}).then(data=> {
  alert(data)
console.log(data)
})
var Adress = ( <HTMLInputElement>document.getElementById("adress") ) 
if(Adress!=null)
Adress.placeholder="Hello"
var Email = (<HTMLInputElement>document.getElementById("email")) 
var Name = (<HTMLInputElement>document.getElementById("name")) 
navigator.geolocation.getCurrentPosition(this.showPosition)
this.isDisabled=true ; 
}
 ngOninit(){
}
 constructor() { } 
}
