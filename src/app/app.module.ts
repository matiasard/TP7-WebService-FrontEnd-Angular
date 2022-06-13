import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisasModule } from './divisas/divisas.module';
import { LibrosModule } from './libros/libros.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DivisasModule,
    LibrosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
