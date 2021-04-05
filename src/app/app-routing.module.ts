import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';
import { AddDadoComponent } from './add dado/add.component';
import { GetDadoComponent } from './get dado/get.component';
import { EditDadoComponent } from './edit dado/edit.component';
import { HomeComponent} from './home/home.component';
import { NotFound4o4Component } from './not-found4o4/not-found4o4.component';

const routes: Routes = [{
 path: '',
  component: HomeComponent
},
/*{
  path: '',
  component: AddDadoComponent
},*/
{
  path: 'dado/create',
  component: AddDadoComponent
},
{
  path: 'user/create',
  component: AddComponent
},
{
  path: 'dado/edit/:id',
  component: EditDadoComponent
},
{
  path: 'user/edit/:id',
  component: EditComponent
},
{
  path: 'dado',
  component: GetDadoComponent
},
{
  path: 'user',
  component: GetComponent
},
{
  path: '404',
  component: NotFound4o4Component
},
{
  path: '**',
  redirectTo: '404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
