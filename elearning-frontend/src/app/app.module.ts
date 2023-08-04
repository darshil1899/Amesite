// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule

@NgModule({
  declarations: [AppComponent, AssessmentComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule, // Add the AppRoutingModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
