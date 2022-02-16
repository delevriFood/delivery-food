import { Component, OnInit } from '@angular/core';
import axios from "axios"
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent   {
 Data :any[]=[]
 //Change bestFood for html to Data 
bestFood: any[] = [{
img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lEa60MoPEz7kNWZQBc_a3wHaEo%26pid%3DApi%26h%3D160&f=1" , 
name:"Melka"
},
{
img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tqdzOaYH9q2BKgvZmvck-gHaE8%26pid%3DApi%26h%3D160&f=1" , 
name :"Mekla2"
}
]
 showPosition(position:any) {
 alert(position.coords.latitude +
" "+ position.coords.longitude);
}
ngOnInit(){
axios.get("http://localhost:5000/user/getAllFodd").then(data=>{
this.Data=data.data 
this.Data.sort(function(a:any,b:any){
return b.click-a.click 
})
})
navigator.geolocation.getCurrentPosition(this.showPosition)
}
  constructor() { }
}
