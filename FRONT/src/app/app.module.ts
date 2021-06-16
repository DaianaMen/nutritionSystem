import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';




import { ListarComponent } from './components/views/dieta/listar/listar.component';
import { CadastrarComponent } from './components/views/dieta/cadastrar/cadastrar.component';
import { RemoverComponent } from './components/views/dieta/remover/remover.component';
import { AlterarComponent } from './components/views/dieta/alterar/alterar.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent,
    RemoverComponent,
    AlterarComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
