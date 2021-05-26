@@ -0,0 +1,26 @@
//Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormularioforoComponent } from './componentes/formularioforo/formularioforo.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistroComponent } from './componentes/registro/registro.component';

//array de rutas
const appRoutes: Routes = [

    {path: '', component: PrincipalComponent},
    {path: 'Principal', component: PrincipalComponent},
    {path: 'Formulario', component: FormularioComponent},
    {path: 'Consulta', component: ConsultaComponent},
    {path: 'Formularioforo', component: FormularioforoComponent},
    {path: 'Registro', component: RegistroComponent},

];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
