import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactMessage } from '../../model/Data.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private contactMessages = new BehaviorSubject<ContactMessage[]>([]);
  currentMessages = this.contactMessages.asObservable();

  constructor() { }

  addMessages(message: ContactMessage) {
    const currentData = this.contactMessages.value;
    this.contactMessages.next([...currentData, message])
  }
}
