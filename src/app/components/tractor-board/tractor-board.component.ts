import { Component, OnInit } from '@angular/core';
import { TractorCardComponent } from '../tractor-card/tractor-card.component';
import { CardsService } from 'src/app/services/cards.service';
import { TractorDetails } from 'src/app/models/tractordetails.model';

@Component({
  selector: 'app-tractor-board',
  templateUrl: './tractor-board.component.html',
  styleUrls: ['./tractor-board.component.scss']
})
export class TractorBoardComponent implements OnInit {

  tractors: TractorDetails[] = [];

  constructor(private tractorService: CardsService) { }

  ngOnInit(): void {
    this.tractors = this.tractorService.onGet();
  }

}
