import { Component, OnInit } from '@angular/core';
import { Person } from '../classes';
import { DataService } from '../people.service';
import { SortOptions } from '../sort.pipe';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    people: Person[];
    selected: Person;

    sortOptions: SortOptions = {
        order: 'asc',
        property: 'Id'
    }

    constructor(
      private service: DataService
    ) { }

    ngOnInit() {
        this.service.getPeople().subscribe(people => this.people = people);
        this.service.getSelectedPerson().subscribe(selected => this.selected = selected);
    }

    setSelectedPerson(id) {
        if (this.selected && this.selected.Id == id) id = -1;
        this.service.setSelectedPerson(id);
    }

    sortBy(newProperty) {
        let newOptions: SortOptions = {
            order: this.sortOptions.property == newProperty
                && this.sortOptions.order == 'asc' ? 'desc' : 'asc',
            property: newProperty
        }
        this.sortOptions = newOptions;
    }
}
