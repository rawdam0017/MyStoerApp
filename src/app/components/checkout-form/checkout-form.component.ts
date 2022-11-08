import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  @Output() checkoutSuccess: EventEmitter<string> = new EventEmitter();

  Name = '';
  Address: string = '';
  Credit: string = '';
  CreditCard = /[0-9]{16}/;
  sum: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,) {

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sum = Number(params.get('sum'));
    })
  }


  NameChanged(arg: any) {
    console.log(
      "firstNameChanged  argument " + arg + "  component " + this.Name
    );
  }

  onSubmit() {
    this.checkoutSuccess.emit(this.Name);
    this.router.navigateByUrl(`confirmation/${this.Name}`);
  }


}
