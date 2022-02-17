import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Subscription } from 'rxjs';
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
ip : "102.156.112.96"
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
}
 ngOninit(){
}
 constructor() {} 
}
