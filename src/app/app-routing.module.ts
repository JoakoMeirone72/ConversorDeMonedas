import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"login",
    loadChildren: ()=> import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  {
    path:"register",
    loadChildren: ()=> import('./pages/register/register.module').then(m => m.RegisterModule) 
  },
  {
    path:"home",
    loadChildren: ()=> import('./pages/home/home.module').then(m => m.HomeModule) 
  },
  {
    path:"subs",
    loadChildren: ()=> import('./pages/subs/subs.module').then(m => m.SubsModule) 
  },
  {
    path:"coins",
    loadChildren: ()=> import('./pages/coins/coins.module').then(m => m.CoinsModule) 
  },
  {
    path:"endfree",
    loadChildren: ()=> import('./pages/endfree/endfree.module').then(m => m.EndfreeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
