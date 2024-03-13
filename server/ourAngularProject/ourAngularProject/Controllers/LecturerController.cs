using Microsoft.AspNetCore.Mvc;
using ourAngularProject.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ourAngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        public static List<Lecturer> lecturers = new List<Lecturer>()
        {
            new Lecturer(){ Name="Shalom",Email="sh@gmail.com",Password="123456"},
            new Lecturer(){ Name="Yakov",Email="y789@gmail.com",Password="145236"},
            new Lecturer(){ Name="Aharon",Email="a142@gmail.com",Password="741852"}
        };

        // GET: api/<LecturerController>
        [HttpGet]
        public IEnumerable<Lecturer> Get()
        {
            return lecturers.ToList();
        }

        // GET api/<LecturerController>/5
        [HttpGet("{id}")]
        public Lecturer Get(int id)
        {
            return lecturers.Find(x => x.LecturerId==id);
        }

        // POST api/<UserController>
        [HttpPost("loginLecturer")]
        public IActionResult Login([FromBody] User loginRequest)
        {
            Lecturer userByName = lecturers.Find(x => x.Name == loginRequest.Name);
            Lecturer user = lecturers.Find(x => x.Name == loginRequest.Name && x.Password == loginRequest.Password);

            if (user == null && userByName != null)
            {
                return StatusCode(300);
            }

            if (user == null)
            {
                return NotFound(); // User not found
            }

            return Ok(user); // User found
        }

        // POST api/<LecturerController>
        [HttpPost]
        public void Post([FromBody] Lecturer value)
        {
            lecturers.Add(value);
        }

        // PUT api/<LecturerController>/5
        [HttpPut("{id}")]
        public Lecturer Put(int id, [FromBody] Lecturer value)
        {
            Lecturer lecturer=lecturers.Find(x=>x.LecturerId == id);
            lecturer.Name = value.Name;
            lecturer.Email = value.Email;
            lecturer.Password = value.Password;
            return lecturer;
        }

        // DELETE api/<LecturerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            lecturers.Remove(lecturers.Find(x=>x.LecturerId==id));
        }
    }
}
