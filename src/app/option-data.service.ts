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
  //In millimeters
  public nibSize = 2;
  //in degrees
  public slant:number|string = 7;

  public isValid(){
    return this.nibSize > 0;
  }
}
