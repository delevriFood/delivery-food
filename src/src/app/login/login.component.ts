import { Component, OnInit } from '@angular/core';
import axios from "axios"
import { Router } from '@angular/router';
import { DeviceDetectorService } from "ngx-device-detector";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  email:String = ''; 
    password = "" ;
    ip=0 ; 
    DeviceInfo = ""
    constructor(private deviceService: DeviceDetectorService , private router:Router) {
      this.epicFunction();
      this.GetIp()
      console.log(this.router)

    }
    epicFunction() {
      console.log(this.deviceService.getDeviceInfo());
      this.DeviceInfo = this.deviceService.getDeviceInfo().os+" "+this.deviceService.getDeviceInfo().browser+" "+this.deviceService.getDeviceInfo().device+" "+this.deviceService.getDeviceInfo().deviceType
    }
  GetDataEmail(event:any){
  this.email = event.target.value
  }
  GetDataPassword(event:any){
    this.password = event.target.value
      }
  async GetIp(){
   await axios.get(" https://ipinfo.io?token=b6ee4628b70b64").then(data=> this.ip = data.data.ip)
   }
  
  async GetDataFromDataBase(event:any){
    event.preventDefault()
      var data ={
        loginEmail: this.email  ,
        loginPaswword :this.password  , 
        ip : this.ip.toString(), 
        device  : this.DeviceInfo , 
      }
var res = ""
   await axios.post("http://localhost:5000/user/loginUser" , {loginEmail: this.email  ,
   loginPaswword :this.password  , 
   ip : this.ip.toString(), 
   device  : this.DeviceInfo 
} ).then(data=>{
  res =data.data
alert(res)   
}).catch(err=> console.log(err))
  if(res=="Account Not Found" ||res =="incorrect"){
    alert("False")
    this.router.navigate(['/Login']);
  }
  else 
  if(res=="2facter"){
    event.preventDefault()

  this.router.navigate(["/Veifiy"])
  }
  else 
  { 
alert("True")
   alert('Welcome')
this.router.navigate([`/Home`])

  }
  
   // if( you get nice redirect him to home compoenent)
      // redirect him to same page 
      //http://localhost:5000/user/loginUser For login 
      /*
    loginEmail  , 
    loginPassword
      
    
    */
   


   }

 

  

}
