import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Property } from './property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private firestore: AngularFirestore) {}

  getProperties() {}

  addProperty(property: Property) {
    return this.firestore.collection('properties').add(property);
  }

  updateProperty() {}

  deleteProperty() {}
}
