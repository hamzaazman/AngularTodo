import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input'; 
import { MatSliderModule } from '@angular/material/slider';
import {MatIcon, MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    MatListModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
