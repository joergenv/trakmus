import { Injectable } from '@angular/core';
import { TractorDetails } from '../models/tractordetails.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  tractors : TractorDetails[] = [
    {id: 'Nh8HmI6OtE',manufacturer:'Fergusson',tractormodel:'35',year:1953  },
    {id: "FWDql9BLfk",manufacturer:'FIAT',tractormodel:'411R',year:1958  },
    {id: "O7Nd5JvyFU",manufacturer:'International Harvester',tractormodel:'B 450',year:1958  },
    {id: "tOz5l7ndlE",manufacturer:'Ford',tractormodel:'35',year:1953  },
    {id: "qdvFR-k3ok",manufacturer:'Bukh',tractormodel:'302',year:1961  },
    {id: "PgEUzRsNsE",manufacturer:'Massey Harris',tractormodel:'744 PD',year:1948  },
    {id: "fcziVLfOJE",manufacturer:'Farmall',tractormodel:'Super BMD',year:1953  },
    {id: "wFcGuKZ180",manufacturer:'Massey Fergusson',tractormodel:'65 MK 3',year:1958  },
  ]

  constructor() { }

  onGet(){
    return this.tractors;
  }
}
