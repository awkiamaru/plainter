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
    ObjectiveThreeComponent
  ],
  imports: [
    CommonModule,
    LayoutRountingModule,
    BrowserModule
  ],
  exports: [HeaderComponent, FooterComponent, ContentComponent]
})
export class LayoutModule { }
