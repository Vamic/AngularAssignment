using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace AngularAssignment.Models
{
    [DataContract]
    public class Country
    {
        private static int IdCounter;
        private static List<Country> generatedList = new List<Country> {
            new Country("Sweden"),
            new Country("USA"),
            new Country("Germany")
        };
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Name { get; set; }

        public Country(string Name)
        {
            Id = ++IdCounter;
            this.Name = Name;
        }

        public static List<Country> GeneratedList()
        {
            return generatedList;
        }
    }
}
