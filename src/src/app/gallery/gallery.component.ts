import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
Data : any[]= []

//Add Descr in the menu schema
//Modify the rating means foor loop for avg score 
// then add start as many as you want 

constructor() { }

  ngOnInit(){
    axios.get("http://localhost:5000/user/getAllFodd").then(data=>{
      this.Data=data.data 
  })

}


}
