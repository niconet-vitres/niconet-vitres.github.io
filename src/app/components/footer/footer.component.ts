import {Component, OnInit} from '@angular/core';
import {FeedbacksService} from '../../services/feedbacks.service';
import {IFeedback} from '../../models/feedbacks.model';
import {DocumentChangeAction} from '@angular/fire/compat/firestore';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    feedbacksList: IFeedback[] = [];
    starsList: number[] = [];

    constructor(private feedbacksService: FeedbacksService) {
    }

    ngOnInit() {
        this.feedbacksService.getFeedbacks().subscribe({
            next: (feedbacks: Array<DocumentChangeAction<unknown>>) => {
                this.feedbacksList = feedbacks.map(item => Object.assign({id: item.payload.doc.id}, item.payload.doc.data())) as IFeedback[];
                console.log("this.feedbacksList: ", this.feedbacksList);
                this.starsList = this.feedbacksList.map(item => item.stars);
                console.log("this.starsList: ", this.starsList);
            }
        });
    }


}
