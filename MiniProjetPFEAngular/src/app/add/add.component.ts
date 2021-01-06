import { pfe } from './../../model/Pfe';
import { typepfe } from './../../model/TypePfe';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from './../gestion.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  listType: typepfe[] = [];
  pfe: pfe = new pfe();
  constructor(private ser: GestionService, private route: Router) { }

  ngOnInit(): void {
    this.getPfetypes();
  }
  gotoList() {
    this.route.navigate(['/']);
  }
   
  getPfetypes() {
    this.ser.getPfetype().subscribe(
      (data) => {
        this.listType = data;
       
      },
      (err) => { console.log(err) }
    )
  }
  
  savepfe(){
 
  this.ser.add(this.pfe).subscribe(
    data=>{this.route.navigate(["/liste"])
    window.location.assign("http://localhost:4200/liste")
},
    
     err=>{
      console.log(JSON.toString())
      console.log(pfe)
 
    }
  )
  }
}
