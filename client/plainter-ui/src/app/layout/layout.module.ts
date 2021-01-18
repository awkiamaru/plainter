import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './content/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutRountingModule } from './layout-rounting.module';
import { PerfilComponent } from './content/perfil/perfil.component';
import { HeaderLoggedComponent } from './header-logged/header-logged.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { HeaderMobileBottomComponent } from './header-mobile-bottom/header-mobile-bottom.component';
import { NetworkingComponent } from './content/networking/networking.component';
import { SignupComponent } from './content/signup/signup.component';
import { SignupOneComponent } from './content/signup/signup-one/signup-one.component';
import { ObjectiveComponent } from './content/objective/objective.component';
import { ObjectiveOneComponent } from './content/objective/objective-one/objective-one.component';
import { ObjectiveTwoComponent } from './content/objective/objective-two/objective-two.component';
import { ObjectiveThreeComponent } from './content/objective/objective-three/objective-three.component';
import { ObjectiveFourComponent } from './content/objective/objective-four/objective-four.component';
import { MentorComponent } from './content/mentor/mentor.component';
import { SignTwoComponent } from './content/signup/sign-two/sign-two.component';
import { SignupThreeComponent } from './content/signup/signup-three/signup-three.component';
import { SignupFourComponent } from './content/signup/signup-four/signup-four.component';
import { SignupFiveComponent } from './content/signup/signup-five/signup-five.component';

import { FindMentorComponent } from './content/find-mentor/find-mentor.component';
import { MentorDetailsComponent } from './content/mentor-details/mentor-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    HeaderLoggedComponent,
    HeaderMobileComponent,
    HeaderMobileBottomComponent,
    NetworkingComponent,
    SignupComponent,
    SignupOneComponent,
    ObjectiveComponent,
    ObjectiveOneComponent,
    ObjectiveTwoComponent,
    ObjectiveThreeComponent,
    ObjectiveFourComponent,
    MentorComponent,
    SignTwoComponent,
    SignupThreeComponent,
    SignupFourComponent,
    SignupFiveComponent,
    FindMentorComponent,
    MentorComponent,
    MentorDetailsComponent
  ],
  imports: [
    CommonModule,
    LayoutRountingModule,
    BrowserModule
  ],
  exports: [HeaderComponent, FooterComponent, ContentComponent]
})
export class LayoutModule { }
