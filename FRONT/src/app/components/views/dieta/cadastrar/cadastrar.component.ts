import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Refeicao } from 'src/app/models/Refeicao';
import { DietaService } from "src/app/services/dieta.service";
import { Dieta } from "src/app/models/Dieta";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  colunasRefeicao = ["descricao","horario", "refeicao"];
 
   // att dieta
   descricao!: string;
   data_inicio!: string;
   data_fim!: string;
 
   //att refeicao
   descricaoRef!: string;
   horarioRef!: string;
   refeicaoRef!: string;
   refeicoes = new MatTableDataSource<Refeicao>();
   

  constructor(private service: DietaService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {  }

  cadastrar(): void {
    let dieta = new Dieta();
    dieta.descricao = this.descricao;
    dieta.data_inicio = new Date(this.data_inicio);
    dieta.data_fim = new Date(this.data_fim);
    dieta.refeicoes = this.refeicoes.data; //ver esse data
    this.service.cadastrar(dieta).subscribe((dieta) => {
      console.log(dieta);
      this.snack.open("Dieta cadastrada", "Dieta", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }

  adicionarRefeicao(): void {
    let refeicao = new Refeicao();
    refeicao.descricao = this.descricaoRef;
    refeicao.horario = this.horarioRef;
    refeicao.refeicao = this.refeicaoRef;
    this.refeicoes.data.push(refeicao);
    this.refeicoes._updateChangeSubscription();
    this.descricaoRef = "";
    this.horarioRef = "";
    this.refeicaoRef = "";
  }

}
