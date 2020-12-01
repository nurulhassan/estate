import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyService } from 'src/provider/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  propertyForm: FormGroup = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: [''],
    cost: [''],
    area: [''],
    bathrooms: [''],
    bedrooms: [''],
    description: ['']
  });

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.propertyService.addProperty(this.propertyForm.value);
    this.propertyForm.reset();
  }
}
