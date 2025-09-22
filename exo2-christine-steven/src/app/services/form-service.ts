import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  public getFirstname(): string | null | undefined {
    return this.contact.firstname;
  }

  public getLastname(): string | null | undefined{
    return this.contact.lastname;
  }

  public getAge(): string | null | undefined{
    return this.contact.age;
  }

  public getEmail(): string | null | undefined{
    return this.contact.email;
  }

  public getComment(): string | null | undefined{
    return this.contact.comment;
  }

  public setFirstname(firstname: string | null | undefined): void {
    this.contact.firstname = firstname;
  }

  public setLastname(lastname: string | null | undefined): void {
    this.contact.lastname = lastname;
  }

  public setAge(age: string | null | undefined): void {
    this.contact.age = age;
  }

  public setEmail(email: string | null | undefined): void {
    this.contact.email = email;
  }

  public setComment(comment: string | null | undefined): void {
    this.contact.comment = comment;
  }
}
