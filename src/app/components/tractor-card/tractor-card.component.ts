import { Component, Input, OnInit, Directive, Attribute } from '@angular/core';
import { TractorDetails } from 'src/app/models/tractordetails.model';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tractor-card',
  templateUrl: './tractor-card.component.html',
  styleUrls: ['./tractor-card.component.scss']
})
export class TractorCardComponent {

  @Input('details') details: TractorDetails;

  constructor(public dialog: MatDialogModule){}

  openDialog() {
    //const dialogRef = this.dialog.openDialog()
  }
  
}
