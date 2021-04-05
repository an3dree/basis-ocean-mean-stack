import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { DadoService } from './dado.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';
import { AddDadoComponent } from './add dado/add.component';
import { GetDadoComponent } from './get dado/get.component';
import { EditDadoComponent } from './edit dado/edit.component';
import { NotFound4o4Component } from './not-found4o4/not-found4o4.component';
import { HomeComponent } from './home/home.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SobreComponent } from './sobre/sobre.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    GetComponent,
    EditComponent,
    AddDadoComponent,
    GetDadoComponent,
    EditDadoComponent,
    NotFound4o4Component,
    HomeComponent,
    DropdownComponent,
    SobreComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //providers: [UserService],
  providers: [DadoService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
