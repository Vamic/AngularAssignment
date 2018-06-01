import { Component, OnInit } from '@angular/core';
import { Person, Country } from '../classes';
import { DataService } from '../people.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    countries: Country[];
    selected: Person;
    formmodel: Person;

    constructor(
      private service: DataService
    ) {
        this.formmodel = new Person(-1, null, null, null);
    }

    ngOnInit() {
        this.service.getCountries()
            .subscribe(countries => this.countries = countries);
        this.service.getSelectedPerson()
            .subscribe(selected => {
                if(selected) selected.Country = this.countries.find(country => country.Id == selected.Country.Id);
                this.selected = selected;
            });
    }

    submitNew() {
        this.service.addPerson(this.formmodel);
    }

    deleteSelected() {
        this.service.deletePerson(this.selected.Id);
    }
    
    editSelected() {
        this.service.editPerson(this.selected);
    }
}
