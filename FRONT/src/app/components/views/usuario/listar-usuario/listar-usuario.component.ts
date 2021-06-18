import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: "app-listar-usuario",
  templateUrl: "./listar-usuario.component.html",
  styleUrls: ["./listar-usuario.component.css"],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios!: MatTableDataSource<Usuario>;
  displayedColumns: string[] = ['id', 'nome', 'peso', 'altura' , 'criadoEm'];

  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.service.listarUsuario().subscribe((usuarios) => {
      this.usuarios = new MatTableDataSource<Usuario>(usuarios);
    });
  }
}
