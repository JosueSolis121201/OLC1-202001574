import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditorComponent } from './component/editor/editor.component';
import { FormsModule } from '@angular/forms';
import { FilaComponent } from './component/fila/fila.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditorComponent,
    FilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
