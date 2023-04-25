import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {AdminModule} from './admin/admin.module';
import {HttpClientModule} from "@angular/common/http";


export const routes: Routes = [
  {
    path: 'admin',
    loadChildren:() => import('./admin/admin.module').then(x=>x.AdminModule)
  },
  {
    path:'',
    pathMatch:"full",
    redirectTo:'admin'
  },
  {
    path:'**',
    redirectTo:'admin'
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, RouterModule.forRoot(routes)  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
