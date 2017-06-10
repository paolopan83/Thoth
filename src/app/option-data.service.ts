import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class OptionsDataService {

  private _options = new BehaviorSubject<Options>(new Options());
  public options$ = this._options;


  updateOptions(options: Options){
    debugger;
    console.log(options.nibSize);
    this._options.next(options);
  }



}

export class Options{
  //In millimeters
  public nibSize = 2;

  public isValid(){
    return this.nibSize > 0;
  }
}
