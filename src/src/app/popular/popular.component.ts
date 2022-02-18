import { Component, OnInit } from '@angular/core';
import axios from 'axios';
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
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  foods!: Foods[] ;
    constructor (private Service: CommonService ) { 
  //     this.menu()
    }
  // async menu(){
  //  await axios.get("http://localhost:5000/admin/food",).then((response) => {
  //    this.data = response.data
  //    console.log(this.data)
  //   })
  // }
id = 0
ip=0



async getIp(){
  await axios.get(" https://ipinfo.io?token=b6ee4628b70b64").then(data=> {
  console.log(data.data.ip)  
  
  this.ip = data.data.ip})
}


    async ngOnInit(): Promise<void> {
      await axios.get("http://localhost:5000/admin/getMenuOneRestaurant",).then((response) => {
        this.foods = response.data
        this.foods.sort(function(a:any,b:any) {
return b.click-a.click 
        })
        console.log(this.foods)
    })
    }

    showPosition(position:any) {
      alert(position.coords.latitude +
     " "+ position.coords.longitude);
     }
    async sendMessage(event : any): Promise<void>  {
     await  this.getIp()
      console.log(event.path[1].outerText)
  var res =  (event.path[1].outerText.split("\n"))
      var price = res[0] 
       var name = res[1]
  axios.post("http://localhost:5000/user/AddClick").then(data=> { 
  console.log(data)
  alert("Check Your Data Base")
  })
  await axios.post("http://localhost:5000/user/getDataIp", {ip:this.ip}).then((data:any )=>{
  console.log(data)
  this.id = data.data[0].id
 // Change it later
  })



  alert(name)
         alert(price)
         alert(this.ip)
         alert(typeof this.ip)
   var data={
     id : this.id , 
     counter : GlobalVars.counter , 
     food  : name , 
     priceFood :price  , 
     ip :  (this.ip.toString())
  }  
  // send message to subscribers via observable subject
      this.Service.sendUpdate(data);
  await axios.post('http://localhost:5000/user/postOrder' , {id:this.id , ip:this.ip.toString() , food : name}).then(data=> {
  console.log(data)
  alert("Check Your Data ")
  })
  navigator.geolocation.getCurrentPosition(this.showPosition);


  }
  // addOne to the Cart 
     AddOne(event:any){ 
       GlobalVars.counter=GlobalVars.counter+1
  // alert(GlobalVars.counter)
  this.sendMessage(event)
      }
  }
  


