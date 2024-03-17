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
            new Category(){CategoryName="dry sport",Icon="https://www.alehrehovot.org.il/upload/s1_1670158390.png"},
            new Category(){CategoryName="water sport",Icon="https://eilat-water-sport.co.il/wp-content/uploads/2023/02/noun-dolphin-icon-4395083-0A73B9.svg"},
            new Category(){CategoryName="Therapeutic sports",Icon="https://image.modiinapp.com/524bbbfb5c6c4_300_300_crop.jpg"}
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

        [HttpGet("ByName/{name}")]
        public ActionResult<Category> GetByName(string name)
        {
            var category = categories.Find(x => x.CategoryName == name);
            if (category == null)
            {
                return NotFound();
            }
            return category;
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
