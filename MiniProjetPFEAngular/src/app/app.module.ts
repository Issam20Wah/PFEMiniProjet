import { GestionService } from './gestion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { SearchComponent } from './search/search.component';

import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypepfeComponent } from './typepfe/typepfe.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AddComponent,
    SearchComponent,
    TypepfeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
 
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
