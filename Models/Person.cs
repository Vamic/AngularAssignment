using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace AngularAssignment.Models
{
    [DataContract]
    public class Person
    {
        private static int IdCounter;
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string FirstName { get; set; }
        [DataMember]
        public string LastName { get; set; }
        [DataMember]
        public Country Country { get; set; }

        public Person(string FirstName, string LastName, Country Country)
        {
            Id = ++IdCounter;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Country = Country;
        }

        public static List<Person> GenerateList(Country[] countries)
        {
            Random RNG = new Random(); 
            List<Person> people = new List<Person>();
            const string initials = "QWRTYPSDFGHJKLZXCBNM";
            for (int i = 0; i < 15; i++)
            {
                people.Add(new Person($"{initials[i]}ert", $"{initials[i]}ain", countries[RNG.Next(countries.Length)]));
            }
            return people;
        }
    }
}
