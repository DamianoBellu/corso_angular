import { Component } from '@angular/core';
import { Calciatore } from "../models/Calciatore";
import {CALCIATORI} from "../data/serie_A"

@Component({
  selector: 'app-calciatori',
  templateUrl: './calciatori.component.html',
  styleUrls: ['./calciatori.component.css']
})
export class CalciatoriComponent {

  calciatori: Calciatore[] = CALCIATORI;
}
