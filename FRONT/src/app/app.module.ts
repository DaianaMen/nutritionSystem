import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


import { ListarComponent } from './components/views/dieta/listar/listar.component';
import { CadastrarComponent } from './components/views/dieta/cadastrar/cadastrar.component';
import { RemoverComponent } from './components/views/dieta/remover/remover.component';
import { AlterarComponent } from './components/views/dieta/alterar/alterar.component';

import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';


import { RemoverUsuarioComponent } from './components/views/usuario/remover-usuario/remover-usuario.component';
import { AlterarUsuarioComponent } from './components/views/usuario/alterar-usuario/alterar-usuario.component';
import { ListarUsuarioComponent } from './components/views/usuario/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './components/views/usuario/cadastrar-usuario/cadastrar-usuario.component';

import { ListarRefeicaoComponent } from './components/views/refeicao/listar-refeicao/listar-refeicao.component';
import { CadastrarRefeicaoComponent } from './components/views/refeicao/cadastrar-refeicao/cadastrar-refeicao.component';
import { RemoverRefeicaoComponent } from './components/views/refeicao/remover-refeicao/remover-refeicao.component';
import { AlterarRefeicaoComponent } from './components/views/refeicao/alterar-refeicao/alterar-refeicao.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    RemoverComponent,
    AlterarComponent,
    HeaderComponent,
    ContentComponent,
    RemoverUsuarioComponent,
    AlterarUsuarioComponent,
    ListarUsuarioComponent,
    CadastrarUsuarioComponent,
    ListarRefeicaoComponent,
    CadastrarRefeicaoComponent,
    RemoverRefeicaoComponent,
    AlterarRefeicaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
