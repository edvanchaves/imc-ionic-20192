import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titulo : string = "IMC";

  massa : number;
  altura : number;
  imc : number = 0.0;

  situacao : string;

  constructor(public navCtrl: NavController) {

  }

  calcular(){
    console.log('inicio...');
    this.imc = Number(this.massa) / (Number(this.altura) * Number(this.altura)); 

    this.imc = Number((this.imc).toFixed(2));

    if(this.imc > 35)
      this.situacao = "SOBREPESO";
    else
      this.situacao = "NORMAL";
    console.log('resultado: ' + this.imc);
  }

}
