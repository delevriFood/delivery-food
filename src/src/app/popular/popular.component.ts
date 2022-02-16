import { Component, OnInit } from '@angular/core';
import axios from 'axios';
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
    constructor () { 
  //     this.menu()
    }
  // async menu(){
  //  await axios.get("http://localhost:5000/admin/food",).then((response) => {
  //    this.data = response.data
  //    console.log(this.data)
  //   })
  // }

  async ngOnInit(): Promise<void> {
    await axios.get("http://localhost:5000/admin/food",).then((response) => {
      this.foods = response.data
      console.log(this.foods)
    })
  }



}
