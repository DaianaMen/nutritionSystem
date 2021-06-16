import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/dieta/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/dieta/listar/listar.component';

const routes: Routes = [
  {
    //Rota para listar dieta
    path : '',
    component: ListarComponent
  },
  {
    //Rota para cadastrar dieta
    path : 'components/dieta/cadastrar',
    component: CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
