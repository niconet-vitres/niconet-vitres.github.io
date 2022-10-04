import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SinglePageComponent,
    IntroductionComponent,
    MyServicesComponent,
    MyWorkComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    FeedbackDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
