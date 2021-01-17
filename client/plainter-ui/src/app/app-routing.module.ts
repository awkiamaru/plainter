import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component: ContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
