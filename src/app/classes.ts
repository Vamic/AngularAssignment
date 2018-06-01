export class Country {
    constructor(
        public Id: number,
        public Name: string
    ) { }
}

export class Person {
    constructor(
        public Id: number,
        public FirstName: string,
        public LastName: string,
        public Country: Country
    ) { }
}
