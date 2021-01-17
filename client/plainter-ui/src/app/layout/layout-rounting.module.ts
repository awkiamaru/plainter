import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './content/login/login.component';
import { NetworkingComponent } from './content/networking/networking.component';
import { PerfilComponent } from './content/perfil/perfil.component';
import { SignupOneComponent } from './content/signup/signup-one/signup-one.component';
import { SignupComponent } from './content/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'networking',
    component: NetworkingComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRountingModule { }
