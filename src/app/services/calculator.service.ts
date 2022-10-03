import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public display = new BehaviorSubject('0');
  public current_display = this.display.asObservable();

  public x: number = 0;
  public y: number = 0;
  public selected_operator: number = 0;
  public clear_on_input: boolean = false;


  constructor() { }

  public input(input: string): void {
    if(+this.display.getValue() == 0 ){
      this.display.next('');
    }

    if(this.clear_on_input === true){
      this.display.next(input);
      this.clear_on_input = false;
    }
    else{
      this.display.next(this.display.getValue() + input);
    }
  }

  public operator(operator: number): void {

    // Remove the input on the next number.
    this.clear_on_input = true;

    // Clear
    if (operator == 1) {
      this.display.next('0');
      this.x = 0;
      this.y = 0;
    }

    if (operator < 8 && operator != 1) {
      this.selected_operator = operator;
      this.x = +this.display.getValue();
    }

    if (operator == 8) {
      this.y = +this.display.getValue();

      let result: number = 0;

      // Addition
      if(this.selected_operator == 2){
        result = this.x + this.y;
      }

      // Subtraction
      if(this.selected_operator == 3){
        result = this.x - this.y;
      }

      // Multiplication
      if(this.selected_operator == 4){
        result = this.x * this.y;
      }

      // Division
      if(this.selected_operator == 5){
        result = this.x / this.y;
      }

      this.display.next('' + result);
      this.selected_operator = 0;
      this.x = result;
    }

  }

  public get_display(): any {
    return this.display;
  }
}
