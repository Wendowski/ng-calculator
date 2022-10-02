import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public display = new BehaviorSubject('');
  public current_display = this.display.asObservable();

  public x: number = 0;
  public y: number = 0;
  public selected_operator: string = "+";


  constructor() { }

  public input(input: string): void {
    this.display.next(this.display.getValue() + input);
  }

  public operator(operator: number): void {
    //Clear
    if (operator == 1) {
      this.display.next('');
    }
  }

  public get_display(): any {
    return this.display;
  }
}
