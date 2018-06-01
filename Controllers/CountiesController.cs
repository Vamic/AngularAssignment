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
    public class CountriesController : ApiController
    {
        static private Country[] countries = Country.GeneratedList().ToArray();
        // GET api/<controller>
        public IEnumerable<Country> Get()
        {
            return countries;
        }

        // GET api/<controller>/5
        public Country Get(int id)
        {
            return countries.FirstOrDefault(c => c.Id == id);
        }
    }
}
