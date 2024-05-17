import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule {
}
