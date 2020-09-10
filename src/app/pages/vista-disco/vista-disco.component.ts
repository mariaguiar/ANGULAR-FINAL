import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/shared/disco.service';
import { Disco } from 'src/app/model/disco';


@Component({
  selector: 'app-vista-disco',
  templateUrl: './vista-disco.component.html',
  styleUrls: ['./vista-disco.component.css']
})
export class VistaDiscoComponent implements OnInit {

  public disco: object;
  constructor(public apiService: DiscoService) { }

  mostrarDisco(id: number)
    {
      
         this.apiService.getDisco(id).subscribe((data)=>
          {
            this.disco = data;
          })
     
 
   }

  mostarDiscos()
  {
    this.apiService.getDiscos().subscribe((data)=>
    {
      this.disco = data[0];
    })
  }

  ngOnInit(): void {
  }

}
