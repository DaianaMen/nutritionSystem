import { Component, OnInit } from '@angular/core';
import { Dieta } from 'src/app/models/Dieta';
import { DietaService } from 'src/app/services/dieta.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  dietas: Dieta[] = [];
  constructor(private service: DietaService) { }

  ngOnInit():void {
    this.service.listar().subscribe((dietas) => {
      this.dietas = dietas;
    });
  }
}
