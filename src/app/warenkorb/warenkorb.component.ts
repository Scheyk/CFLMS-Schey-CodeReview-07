import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.sass']
})

export class WarenkorbComponent implements OnInit {
	items;
  toPay;
  submited = false;
  		

  constructor(private serviceService: ServiceService,private formBuilder: FormBuilder) { 
  	this.toPay = this.formBuilder.group({
      name: ['',Validators.required],
      strasse: ['',Validators.required],
      plz: ['',Validators.required],
      ort: ['',Validators.required],
      msg: ['',Validators.required]
    });    
  }

  ngOnInit(): void {
  	this.items = this.serviceService.getItems();
  }

  onSubmit(costumerData) {
    this.submited = true;

    if (this.toPay.invalid){
      window.alert('Don`t forget to fill out ;)');
      return;
    }

    window.alert('Your order is submited');
    this.items = this.serviceService.clearCart();
    this.toPay.reset();
  }

}
