import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//DIETA
import { CadastrarComponent } from './components/views/dieta/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/dieta/listar/listar.component';

//USUARIO

import { RemoverUsuarioComponent } from './components/views/usuario/remover-usuario/remover-usuario.component';
import { AlterarUsuarioComponent } from './components/views/usuario/alterar-usuario/alterar-usuario.component';
import { CadastrarUsuarioComponent } from './components/views/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './components/views/usuario/listar-usuario/listar-usuario.component';

//REFEIÇÃO

const routes: Routes = [
  // DIETA
  {
    //Rota para listar dieta
    path : '',
    component: ListarComponent
  },
  {
    //Rota para cadastrar dieta
    path : 'components/dieta/cadastrar',
    component: CadastrarComponent
  },


  // USUARIO
  {
    //Rota para listar usuario
    path : 'components/usuaio/listar-usuario',
    component: ListarUsuarioComponent

  },
  {
    //Rota para cadastrar usuario
    path : 'components/usuario/cadastrar-usuario',
    component: CadastrarUsuarioComponent

  },
  {
    //Rota para remover usuario
    path : 'components/usuario/remover-usuario',
    component: RemoverUsuarioComponent
  },
  {
    //Rota para cadastrar usuario
    path : 'components/usuario/alterar-usuario',
    component: AlterarUsuarioComponent
  }

  // REFEIÇÃO


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
