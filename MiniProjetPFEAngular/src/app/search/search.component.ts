import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  pfee: any = []
  constructor(private ser: GestionService, private route: Router) { }

  ngOnInit(): void {
      this.getPfee("lkll");
  }
  
  getPfee(titre:String) {
    this.ser.getpfee(titre).subscribe(

      (data) => {
        this.pfee = data;
      
      },
      (err) => { console.log(err) }



    )
  }
  deletepfe(id:number){
    this.ser.deletepfe(id).subscribe
    (
      data => {
        console.log(data);
        this.getPfee;
        this.route.navigate(["/search"])
      },
      error => console.log(error));
}
}