using Microsoft.AspNetCore.Mvc;
using ourAngularProject.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ourAngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> users = new List<User>()
        {
            new User(){Name="miryam", Address="sokolov", Email="mimi@gmail.com",Password="4569820"},
            new User(){Name="tamar", Address="pardo", Email="tt@gmail.com",Password="7458213"},
            new User(){Name="yael", Address="chagay", Email="yy@gmail.com",Password="123"},
        };

        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users.ToList();
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            //if(users.Find(x => x.UserId == id))
            return users.Find(x=>x.UserId==id);
        }

        // POST api/<UserController>
        [HttpPost("login")]
        public IActionResult Login([FromBody] User loginRequest)
        {
            User userByName= users.Find(x => x.Name == loginRequest.Name);
            User user = users.Find(x => x.Name == loginRequest.Name && x.Password == loginRequest.Password);

            if (user == null&&userByName!=null)
            {
                return StatusCode(300);
            }

            if (user == null)
            {
                return NotFound(); // User not found
            }

            return Ok(user); // User found
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User value)
        {
            users.Add(value);   
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public User Put(int id, [FromBody] User value)
        {
            User user = users.Find(x => x.UserId == id);
            user.Name = value.Name;
            user.Email = value.Email;
            user.Password = value.Password;
            return user;
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            users.Remove(users.Find(x=>x.UserId==id));
        }
    }
}
