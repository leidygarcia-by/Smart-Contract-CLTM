@@ -1,27 +1,45 @@
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NavComponent } from './componentes/nav/nav.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormularioforoComponent } from './componentes/formularioforo/formularioforo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    FormularioComponent
    FormularioComponent,
    NavComponent,
    PrincipalComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    FormularioforoComponent,
    RegistroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
