import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CallFormComponent } from 'src/app/components/call-form/call-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CallDataTableComponent } from './components/call-data-table/call-data-table.component';

@NgModule({
  declarations: [AppComponent, CallFormComponent, CallDataTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
