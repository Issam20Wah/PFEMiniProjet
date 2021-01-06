import { TypepfeComponent } from './typepfe/typepfe.component';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { SearchComponent } from './search/search.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:ListeComponent},
  {path:'liste',component:ListeComponent },
  {path:'search',component:SearchComponent},

  {path:'add',component:AddComponent},
  {path:'type/:id',component:TypepfeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
