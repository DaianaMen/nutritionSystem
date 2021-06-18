import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-cadastrar-usuario",
  templateUrl: "./cadastrar-usuario.component.html",
  styleUrls: ["./cadastrar-usuario.component.css"],
})
export class CadastrarUsuarioComponent implements OnInit {
  
  //att usuario
  nome!: string;
  data_nascimento!: string;
  peso!: string;
  altura!: string;

  constructor(private service: UsuarioService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {  }

  cadastrarUsuario(): void {
    let usuario = new Usuario();
    usuario.nome = this.nome;
    usuario.data_nascimento = new Date(this.data_nascimento);
    usuario.peso = Number.parseInt(this.peso);
    usuario.altura = Number.parseInt(this.altura);
    this.service.cadastrarUsuario(usuario).subscribe((usuario) => {
      console.log(usuario);
      this.snack.open("Usuario cadastrado", "Usuario", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }

}
