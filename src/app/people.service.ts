import { Observable, Subject, of, empty } from 'rxjs';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, Country } from './classes';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private apiURL: string = "/Api";
    private peopleSubject: Subject<Person[]>;
    private selectedSubject: Subject<Person>;
    private countriesObservable: Observable<Country[]>;
    private requests: object;

    constructor(
        private http: HttpClient
    ) {
        this.selectedSubject = new Subject();
        this.peopleSubject = new Subject();
        this.requests = {
            people: this.http.get<Person[]>(`${this.apiURL}/People`),
            countries: this.http.get<Country[]>(`${this.apiURL}/Countries`)
        };
        this.updatePeopleList();
    }

    private updatePeopleList() {
        this.requests["people"].subscribe(people => this.peopleSubject.next(people));
    }

    async addPerson(person: Person): Promise<void> {
        await this.http.put(`${this.apiURL}/People`, person).toPromise();
        this.updatePeopleList();
    }

    async editPerson(person: Person): Promise<void> {
        await this.http.put(`${this.apiURL}/People/${person.Id}`, person).toPromise();
        this.updatePeopleList();
    }

    async deletePerson(id: number): Promise<void> {
        await this.http.delete(`${this.apiURL}/People/${id}`).toPromise();
        this.updatePeopleList();
        this.selectedSubject.next(null);
    }

    getPeople(): Subject<Person[]> {
        return this.peopleSubject;
    }

    getCountries(): Observable<Country[]> {
        return this.requests["countries"] as Observable<Country[]>;
    }

    getSelectedPerson(): Subject<Person> {
        console.log("Getting selected");
        return this.selectedSubject;
    }

    setSelectedPerson(id): void {
        console.log("Selected " + id);
        this.http.get<Person>(`http://localhost:55924/Api/People/${id}`)
            .subscribe(person => this.selectedSubject.next(person));
    }

}
