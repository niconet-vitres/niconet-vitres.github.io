import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction, DocumentReference} from '@angular/fire/compat/firestore';
import {IFeedback} from '../models/feedbacks.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(private store: AngularFirestore) { }

  addFeedback = (feed: IFeedback): Promise<DocumentReference<unknown>> => {
    return this.store.collection('feedbacks').add(feed);
  }

  getFeedbacks = (): Observable<any> => {
    return this.store.collection("feedbacks").snapshotChanges();
  }
}
