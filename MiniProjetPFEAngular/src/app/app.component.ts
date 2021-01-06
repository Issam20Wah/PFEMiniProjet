import { GestionService } from './gestion.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pfe: any = []
  title = 'backend';
  pfetype: any = []

  constructor(private ser: GestionService, private route: Router) { }
 
  ngOnInit(): void {
    this.getPfes();
    this.type();
 
  }
  getPfes() {
    this.ser.getAllPfe().subscribe(

      (data) => {
        this.pfe = data;
      
      },
      (err) => { console.log(err) }



    )
  }
  deletepfe(id:number){
    this.ser.deletepfe(id).subscribe
    (
      data => {
        console.log(data);
        this.getPfes;
        this.route.navigate(["/liste"])
      },
      error => console.log(error));
}

  type(){
    this.ser.type().subscribe(

      (data) => {
        this.pfetype = data;
        console.log(this.pfetype)
   
      },
      (err) => { console.log(err) }



    )
  }
  
}
