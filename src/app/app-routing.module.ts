import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SinglePageComponent} from './components/single-page/single-page.component';
import {AboutComponent} from './components/about/about.component';
import {MyServicesComponent} from './components/my-services/my-services.component';
import {MyWorkComponent} from './components/my-work/my-work.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: MyServicesComponent },
  { path: 'work', component: MyWorkComponent },
  { path: '', component: SinglePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
