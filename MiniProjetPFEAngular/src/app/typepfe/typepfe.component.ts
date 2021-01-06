import { ActivatedRoute, Router } from '@angular/router';
import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typepfe',
  templateUrl: './typepfe.component.html',
  styleUrls: ['./typepfe.component.css']
})
export class TypepfeComponent implements OnInit {
  num :number;
  pfe: any = []
  constructor(private ser: GestionService, private act:ActivatedRoute) {
    this.num =this.act.snapshot.params["id"];
    this.ser.gettypepfe(this.num).subscribe(
      (data) =>{ this.pfe=data},
      (err) =>{}
    )}
 
  ngOnInit(): void {
    
  }
  
  deletepfe(id:number){
    this.ser.deletepfe(id).subscribe
    (
      data => {
        console.log(data);
        this.pfe;
      },
      error => console.log(error));
}
}