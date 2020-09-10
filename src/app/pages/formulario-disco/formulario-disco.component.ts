import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/shared/disco.service';
import { Disco } from 'src/app/model/disco';

@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.css']
})
export class FormularioDiscoComponent implements OnInit {

  constructor(public apiService: DiscoService) { }

  insertarDisco(titulo: string, interprete: string, anyoPublicacion: number)
  {
    this.apiService.postDisco(new Disco(0, titulo, interprete, anyoPublicacion)).subscribe((data) =>
    {
      console.log(data);
    })
    
  }

  editarDisco(id: number, titulo: string, interprete: string, anyoPublicacion: number)
  {
    this.apiService.putDisco(new Disco(id, titulo, interprete, anyoPublicacion)).subscribe((data) =>
    {
      console.log(data);
    })
    
  }

  eliminarDisco(id: number)
  {
    this.apiService.deleteDisco(id).subscribe((data) =>
    {
      console.log(data);
    })
    
  }

  ngOnInit(): void {
  }

}
