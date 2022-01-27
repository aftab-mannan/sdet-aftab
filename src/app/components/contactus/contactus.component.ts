import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactUs } from 'src/app/common/ContactUs';
import { ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
