import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindMentorComponent } from './content/find-mentor/find-mentor.component';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './content/login/login.component';
import { MentorDetailsComponent } from './content/mentor-details/mentor-details.component';
import { MentorComponent } from './content/mentor/mentor.component';
import { NetworkingComponent } from './content/networking/networking.component';
import { ObjectiveFourComponent } from './content/objective/objective-four/objective-four.component';
import { ObjectiveOneComponent } from './content/objective/objective-one/objective-one.component';
import { ObjectiveThreeComponent } from './content/objective/objective-three/objective-three.component';
import { ObjectiveTwoComponent } from './content/objective/objective-two/objective-two.component';
import { ObjectiveComponent } from './content/objective/objective.component';
import { PerfilComponent } from './content/perfil/perfil.component';
import { SignTwoComponent } from './content/signup/sign-two/sign-two.component';
import { SignupFiveComponent } from './content/signup/signup-five/signup-five.component';
import { SignupFourComponent } from './content/signup/signup-four/signup-four.component';
import { SignupOneComponent } from './content/signup/signup-one/signup-one.component';
import { SignupThreeComponent } from './content/signup/signup-three/signup-three.component';
import { SignupComponent } from './content/signup/signup.component';

const routes: Routes = [
  {
    path: '',
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
  },
  {
    path:'objective',
    component: ObjectiveComponent
  },
  {
    path:'objectiveOne',
    component: ObjectiveOneComponent
  },
  {
    path:'objectiveTwo',
    component: ObjectiveTwoComponent
  },
  {
    path:'objectiveThree',
    component: ObjectiveThreeComponent
  },
  {
    path:'objectiveFour',
    component: ObjectiveFourComponent
  },
  {
    path: 'mentorias',
    component: MentorComponent,
  },
  {
    path: 'signupTwo',
    component: SignTwoComponent,
  },
  {
    path: 'signupThree',
    component: SignupThreeComponent,
  },
  {
    path: 'signupFour',
    component: SignupFourComponent,
  },
  {
    path: 'signupFive',
    component: SignupFiveComponent,
  },{
    path: 'mentorias',
    component: MentorComponent,
  },
{
  path: 'mentorias/encontrar',
  component: FindMentorComponent
},
{
  path: 'mentorias/detalhes',
  component: MentorDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRountingModule { }
