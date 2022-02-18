import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy ,ChangeDetectorRef} from '@angular/core';
import {GlobalVars} from '../global-variable';
import { CommonService } from '../CommonService';
import { CommonServicea } from '../Commonservice1';
export class Foods{
constructor(
  public id : number,
  public food_name : string,
  public price : number,
  public image_food : string
  ) { 
//     this.menu()
  }
}
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularComponent  {
  ip = 0 
  id = 0
    constructor (private router:Router, private cd: ChangeDetectorRef , private Service: CommonService, private Service1: CommonService) { 
    }
    Data :any[]=[]
    //Change bestFood for html to Data 
    foods!: Foods[] ;
    
async GetData(){
  await axios.get("http://localhost:5000/admin/getMenuOneRestaurant",).then((response) => {
    this.foods = response.data
    console.log(this.foods)
})
return this.foods
}
async ngOnInit(): Promise<void> {
  await axios.get("http://localhost:5000/admin/getMenuOneRestaurant",).then((response) => {
    this.foods = response.data
    console.log(this.foods)
})
}

   showPosition(position:any) {
    alert(position.coords.latitude +
   " "+ position.coords.longitude);
   }
  async sendMessage(event : any): Promise<void>  {
    console.log(event.path[1].outerText)    
var res =  (event.path[1].outerText.split("\n"))
    var price = res[0] 
     var name = res[1]  
axios.post("http://localhost:5000/user/AddClick",{food:name}).then(data=> { 
console.log(data)
alert("Check Your Data Base")
})     
alert(name)
       alert(price)
 var data={
   id : this.id , 
   counter : GlobalVars.counter , 
   food  : name , 
   priceFood :price  , 
   ip :  (this.ip)
}     // send message to subscribers via observable subject
    this.Service.sendUpdate(data);
await axios.post('http://localhost:5000/user/postOrder' , {id:this.id , ip:this.ip , food : name}).then(data=> {
console.log(data)
alert("Check Your Data ")
})
}
// addOne to the Cart 
   AddOne(event:any){ 
     GlobalVars.counter=GlobalVars.counter+1      
// alert(GlobalVars.counter)
this.sendMessage(event)
    }
}
