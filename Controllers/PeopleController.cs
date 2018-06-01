using AngularAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularAssignment.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PeopleController : ApiController
    {
        static private List<Country> countries = Country.GeneratedList();
        static private List<Person> people = Person.GenerateList(countries.ToArray());
        // GET api/<controller>
        public IEnumerable<Person> Get()
        {
            return people;
        }

        // GET api/<controller>/5
        public Person Get(int id)
        {
            return people.FirstOrDefault(person => person.Id == id);
        }

        // PUT api/<controller>
        public HttpResponseMessage Put([FromBody]Person person)
        {
            if(person.Id > -1)
            {
                int index = people.FindIndex(p => p.Id == person.Id);
                if (index > -1) return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            people.Add(new Person(person.FirstName, person.LastName, person.Country));
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, [FromBody]Person person)
        {
            int index = people.FindIndex(p => p.Id == id);
            person.Id = id;
            if (index == -1) return new HttpResponseMessage(HttpStatusCode.BadRequest);
            people[index] = person;
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            people = people.Where(person => person.Id != id).ToList();
        }
    }
}
