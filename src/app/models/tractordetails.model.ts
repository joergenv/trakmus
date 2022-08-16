export class TractorDetails {
    id?:string;
    manufacturer?:string;
    tractormodel?:string;
    year?:number;

    constructor(id:string, manufacturer:string, tractormodel:string, year:number){
        this.id = id;
        this.manufacturer = manufacturer;
        this.tractormodel = tractormodel;
        this.year=year;
    }
}