import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Mat library imports

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MenuComponent } from './menu/menu.component';
import { PatientComponent } from './patient/patient.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignupComponent } from './signup/signup.component';
import { MeetingsInfoComponent } from './meetings-info/meetings-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MeetingsComponent,
    MeetingsInfoComponent,
    MenuComponent,
    PatientComponent,
    SideNavComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,    
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
