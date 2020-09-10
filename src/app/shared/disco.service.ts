import { Injectable } from '@angular/core';
import { Disco } from '../model/disco';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

 private url = "http://localhost:5000/discos"
 constructor(private http: HttpClient){}
 public disco: Disco;

getDisco(id: number)
{
  return this.http.get(this.url + "?id=" + id);
}

getDiscos()
{
  return this.http.get(this.url);
}

postDisco(newDisco: Disco)
{
  return this.http.post(this.url, newDisco)
}

putDisco(newDisco: Disco)
{
  console.log(newDisco);
  return this.http.put(this.url, newDisco)
}

deleteDisco(id: number)
{
  return this.http.delete(this.url + "?id=" + id);
}




}
