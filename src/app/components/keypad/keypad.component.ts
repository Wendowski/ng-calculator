import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';


@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor(public calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  public onPress(value: string): void{
    this.calculatorService.input(value);
  }

}
