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
  public selected_operator: number = 0;


  constructor() { }

  public input(input: string): void {
    this.display.next(this.display.getValue() + input);
  }

  public operator(operator: number): void {
    // Clear
    if (operator == 1) {
      this.display.next('');
    }

    if (operator < 8 && operator != 1) {
      this.selected_operator = operator;
      this.x = +this.display.getValue();
      this.display.next('');
    }

    if (operator == 8) {
      this.y = +this.display.getValue();

      let result: number = 0;

      if(this.selected_operator == 2){
        result = this.x + this.y;
      }

      if(this.selected_operator == 3){
        result = this.x - this.y;
      }

      if(this.selected_operator == 4){
        result = this.x * this.y;
      }

      if(this.selected_operator == 5){
        result = this.x / this.y;
      }

      this.display.next('' + result);
    }

  }

  public get_display(): any {
    return this.display;
  }
}
