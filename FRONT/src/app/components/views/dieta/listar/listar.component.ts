import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Dieta } from "src/app/models/Dieta";
import { DietaService } from "src/app/services/dieta.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  dietas!: MatTableDataSource<Dieta>;
  displayedColumns: string[] = ['id', 'descricao', 'data_inicio', 'data_fim'];

  constructor(private service: DietaService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((dietas) => {
      this.dietas = new MatTableDataSource<Dieta>(dietas);
    });
  }
}
