import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

import { offers } from '../offers'


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})

export class CartComponent implements OnInit {
	offer;		

  constructor(private route: ActivatedRoute,private serviceService: ServiceService) { }

  addTo(offer){
  	window.alert("Artikel wurde in deinen Warenkorb gelegt");
  	this.serviceService.addTo(offer);
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(i => {
   	this.offer = offers[+i.get('ID')];
  });
  }  

}
