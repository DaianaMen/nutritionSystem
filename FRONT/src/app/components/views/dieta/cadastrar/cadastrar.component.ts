
import { Component, OnInit } from "@angular/core";
import { Dieta } from "src/app/models/Dieta";

import { DietaService } from 'src/app/services/dieta.service';

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})

export class CadastrarComponent implements OnInit {
  dieta: Dieta = new Dieta();

  constructor(private service: DietaService) {}

  ngOnInit(): void {}

  cadastrar(): void {
    this.service.cadastrar(this.dieta).subscribe((dieta) => {
      console.log(dieta)      
    });
  }
}
