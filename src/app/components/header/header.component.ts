import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FeedbackDialogComponent} from '../feedback-dialog/feedback-dialog.component';
import {FeedbacksService} from '../../services/feedbacks.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(public dialog: MatDialog, private feedbacksService: FeedbacksService) {
    }

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        const dialogRef = this.dialog.open(FeedbackDialogComponent, {
            width: '270px',
            enterAnimationDuration,
            exitAnimationDuration,
            position: {
                right: '10px',
                top: '70px'
            }
        });

        dialogRef.afterClosed().subscribe({
            next: values => {
                if (values) {
                    this.feedbacksService.addFeedback(values).catch(
                        err => {
                            console.log("erreur de sauvegarde: ", err);
                        }
                    );
                }
            }
        });
    }
}
