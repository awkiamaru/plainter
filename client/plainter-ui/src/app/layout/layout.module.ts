import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, ContentComponent]
})
export class LayoutModule { }
