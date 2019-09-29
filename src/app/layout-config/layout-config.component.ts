import { Component, OnInit } from '@angular/core';
import {OptionsDataService, Options} from "../option-data.service";


@Component({
  selector: 'app-layout-config',
  templateUrl: './layout-config.component.html',
  styleUrls: ['./layout-config.component.css']
})
export class LayoutConfigComponent implements OnInit {

  public options: Options;

  constructor(public optionData: OptionsDataService) {

  }

  ngOnInit() {
    this.options = this.optionData.options$.getValue();
  }

  optionsChange(){
    this.optionData.updateOptions(this.options);
  }

  onPrint() {
    window.print();
  }
}
