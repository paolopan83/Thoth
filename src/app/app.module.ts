import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SvgSheetComponent } from './svg-sheet/svg-sheet.component';
import { LayoutConfigComponent } from './layout-config/layout-config.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgSheetComponent,
    LayoutConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
