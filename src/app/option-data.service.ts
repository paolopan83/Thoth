import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class OptionsDataService {

  private _options = new BehaviorSubject<Options>(new Options());
  public options$ = this._options;

  updateOptions(options: Options){
    console.log(options.nibSize);
    this._options.next(options);
  }
}

export class Options{
  // In millimeters
  public nibSize = 3.5;
  // in degrees
  public slant: number|string = 7;

  public text = 'Made with Thoth';

  public rowHieghts = '2, 3';

  public static parseRowHeights(text: string): Array<number> {
    return text.split(/[, ]+/).map((x) => parseFloat(x));
  }

  public isValid() {
    return this.nibSize > 0;
  }
}
