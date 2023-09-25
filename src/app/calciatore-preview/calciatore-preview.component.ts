import { Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import { Calciatore,} from '../models/calciatore';

@Component({
  selector: 'app-calciatore-preview',
  templateUrl: './calciatore-preview.component.html',
  styleUrls: ['./calciatore-preview.component.css']
})
export class CalciatorePreviewComponent implements OnInit, OnDestroy {
  @Input()
  calciatore?: Calciatore;

  @Input()
  delay?: number;

  @Input()
  dispari?: boolean;

  @Output()
  oncalciatoreSelezionato = new EventEmitter<Calciatore>();
  
  constructor(){
    console.log("istanziato");
  }

  ngOnInit(): void {
    console.log("caricato");

    // setInterval(() => {
    //   this.oncalciatoreSelezionato.emit(this.calciatore);
    // }, this.delay);
    
  }
  
  ngOnDestroy(){

  }

  seleziona(){
    this.oncalciatoreSelezionato.emit(this.calciatore);
  }

}
