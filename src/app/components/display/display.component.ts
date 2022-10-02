import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public display: string = "";

  constructor(public calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.display = this.calculatorService.get_display();

    this.calculatorService.current_display.subscribe(msg => this.display = msg);
  }

}
