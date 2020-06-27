import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

import { offers } from '../offers';


@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
	offers = offers;
	offer;

  constructor(private route: ActivatedRoute,private serviceService: ServiceService) {  	
  }

  addTo(offer){
  	window.alert("Artikel wurde in deinen Warenkorb gelegt");
  	this.serviceService.addTo(offer);
  }
  

  ngOnInit(): void {  	
  }

}
