import { Component } from '@angular/core';
import { PRODOTTI } from '../data/prodotti';
import { Prodotto } from '../models/prodotto';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent {
  Prodotti: Prodotto[]= PRODOTTI;
}
