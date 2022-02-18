import { Component, OnInit } from '@angular/core';
import axios from "axios"
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private router:Router) { }
 Hash =""

 SendData(event:any){ 
 event.preventDefault()
var first = (<HTMLInputElement>document.getElementById("first")) 
var second = (<HTMLInputElement>document.getElementById("second")) 
var third= (<HTMLInputElement>document.getElementById("third"))
var fourth = (<HTMLInputElement>document.getElementById("fourth"))
var five=  (<HTMLInputElement>document.getElementById("five"))
var six =  (<HTMLInputElement>document.getElementById("six"))
console.log(first.value)
var rez =""
if(first!=null && second !=null && third!=null && fourth!=null  && five !=null && six!=null){
rez= first.value+ second.value+third.value+fourth.value+five.value+six.value
console.log(rez)
alert(rez==this.Hash)
if(rez==this.Hash)
this.router.navigate(["/Home"])
else 
this.router.navigate(["/Login"])
}


}


  ngOnInit(): void {
    axios.post("http://localhost:5000/user//DoHahsing").then(data=>{
  this.Hash=data.data
    })
 
  }

}
