import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private contact: Contact = {
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    comment: '',
  }

  public getContact(): Contact{
    return this.contact;
  }

  public setContact(contact: Contact): void {
    this.contact.firstname = contact.firstname;
    this.contact.lastname = contact.lastname;
    this.contact.age = contact.age;
    this.contact.email = contact.email;
    this.contact.comment = contact.comment;


  }
}
