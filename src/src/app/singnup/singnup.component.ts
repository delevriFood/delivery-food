import { Component, OnInit } from '@angular/core';
import axios from "axios"
import { Router } from '@angular/router';
import { DeviceDetectorService } from "ngx-device-detector";
@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent  {
email =""  ; 
password ="" ; 
phone = "" 
firstName ="" ;
lastName=""  ; 
ip = "" 
device = ""

  constructor(private deviceService: 
    
    DeviceDetectorService , private router:Router) { 
this.GetIp()
this.epicFunction()

  }

  epicFunction() {
    console.log(this.deviceService.getDeviceInfo());
    this.device = this.deviceService.getDeviceInfo().os+" "+this.deviceService.getDeviceInfo().browser+" "+this.deviceService.getDeviceInfo().device+" "+this.deviceService.getDeviceInfo().deviceType
  }
  async GetIp(){
    await axios.get(" https://ipinfo.io?token=b6ee4628b70b64").then(data=> this.ip = data.data.ip)
    }

GetEmail(event:any){
this.email=event.target.value
}
Getpassword(event:any){ 
this.password= event.target.value

}
Getphone(event:any){ 
this.phone=event.target.value
}
getFirstName(event:any){ 
this.firstName = event.target.value
}
getLastName(event:any){
this.lastName=event.target.value
}
async SendData(){ 
await axios.post("http://localhost:5000/user/signUpUser",{
firstName : this.firstName , 
lastName: this.lastName ,
email:  this.email , 
password : this.password , 
phone: this.phone , 
ip : this.ip , 
device : this.device }).then(response=> {
alert(response)
console.log(response)
})

}



}
