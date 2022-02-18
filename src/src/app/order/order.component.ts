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
arr : any
id =0
food =""
Arr =[{
firstName:"" , 
lastName:"" , 
email:"" ,
phoneNumber: ""
}]
 orderlist = new Map()
res : any[] = []
showPosition(position:any) {
  alert(position.coords.latitude +
 " "+ position.coords.longitude);
 }
 async getIp(){
  await axios.get(" https://ipinfo.io?token=b6ee4628b70b64").then(data=> {
  console.log(data.data.ip)  
  
  this.ip = data.data.ip})
}
async load()
{
 await this.getIp()
  alert(this.ip)

 alert("Hi Orderd") 
await axios.post("http://localhost:5000/user/getDataIp",{
ip : this.ip
}).then(data=> {
this.Arr= data.data
console.log(this.Arr[0].firstName)
})
alert(this.Arr[0].firstName)
navigator.geolocation.getCurrentPosition(this.showPosition)
this.isDisabled=true ; 
console.log(this.Arr[0])
  await axios.post("http://localhost:5000/user/getDataIp", {ip:this.ip}).then((data:any )=>{
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
  this.arr = this.food.split("/")
var x= 0
  for (let i = 0 ; i< this.arr.length; i ++){
if(this.arr[i]!=="undefined" && this.arr[i].length>1) {
if(this.orderlist.has(this.arr[i])==true){
    x = this.orderlist.get(this.arr[i])  
  this.orderlist.set(this.arr[i] , x+1 )  
}
else 
this.orderlist.set(this.arr[i] , 1 )  


}
 }
 var ex ={
 name : "" , 
 qt : ""  

 }
 
 for (let [key , value ] of this.orderlist){
  ex.name = key 
  ex.qt= value 
  this.res.push(ex)
 }
 console.log(ex)
 })
}
 constructor(private Service1: CommonService) {
  this.sub= this.Service1.getUpdate().subscribe
  (x => { //message contains the data sent from service
 
  console.log(x["text"])
  this.count = x["text"].counter;
  });
 } 
}