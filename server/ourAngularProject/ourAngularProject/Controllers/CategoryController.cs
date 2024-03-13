using Microsoft.AspNetCore.Mvc;
using ourAngularProject.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ourAngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public static List<Category> categories = new List<Category>()
        {
            new Category(){CategoryName="dry sport"},
            new Category(){CategoryName="water sport"},
            new Category(){CategoryName="Therapeutic sports"}
        };

        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories.ToList();
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            return categories.Find(x => x.CategoryId == id);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category value)
        {
            categories.Add(value);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public Category Put(int id, [FromBody] Category value)
        {
            Category temp = categories.Find(x => x.CategoryId == id);
            temp.CategoryName = value.CategoryName;

            return temp;
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            categories.Remove(categories.Find(x => x.CategoryId == id));
        }
    }
}
