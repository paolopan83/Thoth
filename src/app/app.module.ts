import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SvgSheetComponent } from './svg-sheet/svg-sheet.component';
import { LayoutConfigComponent } from './layout-config/layout-config.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {OptionsDataService} from "./option-data.service";
import {SvgDrawerService} from "./svg-drawer.service";

@NgModule({
  declarations: [
    AppComponent,
    SvgSheetComponent,
    LayoutConfigComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OptionsDataService, SvgDrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
