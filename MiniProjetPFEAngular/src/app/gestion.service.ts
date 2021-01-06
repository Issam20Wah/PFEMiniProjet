import { pfe } from './../model/Pfe';
import { typepfe } from './../model/TypePfe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor( private http:HttpClient) { }
  add(pfe:pfe)
  {return this.http.post("http://127.0.0.1:8080/project/add-pfe/",pfe)}
  type()
  { return this.http.get("http://127.0.0.1:8080/project/type-pfe") }
   getAllPfe()
  {return this.http.get("http://127.0.0.1:8080/project/liste-pfe")}
  deletepfe(id:number)
  {return this.http.delete("http://127.0.0.1:8080/project/delete-pfe/"+id)}
  getPfetype()
  {return this.http.get<typepfe[]>("http://127.0.0.1:8080/project/type-pfe")} 
  gettypepfe(id:number)
  {return this.http.get("http://127.0.0.1:8080/project/type-pfe/"+id)} 
  getpfee(titre:String)
  {return this.http.get("http://127.0.0.1:8080/rest/search-pfee/"+titre)}
}
