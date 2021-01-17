import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './content/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutRountingModule } from './layout-rounting.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LayoutRountingModule,
    BrowserModule
  ],
  exports: [HeaderComponent, FooterComponent, ContentComponent]
})
export class LayoutModule { }
