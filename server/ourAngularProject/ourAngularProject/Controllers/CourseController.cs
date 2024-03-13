using Microsoft.AspNetCore.Mvc;
using ourAngularProject.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ourAngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        public static List<Course> courses = new List<Course>()
        {
           new Course(){ CourseName="Gymnastics", numOfLesson=15, StartDate=new DateTime(2024,04,15),
           Syllabus=new List<string>{"Hand resistance", "rollers" ,"jumps", "Rounds", "bridges" }, FormLearninig=EformLearning.zoom, },

           new Course(){CourseName="water Gymnastics",  numOfLesson=10, StartDate=new DateTime(2025,04,02),
            Syllabus=new List<string>{ "Swimming strokes", "Treading water", "Aquatic fitness exercises", "Breath control", "Diving techniques" }, FormLearninig=EformLearning.frontal }
         };
        //GET: api/<Controller>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return courses.ToList();
        }

        // GET api/<Controller>/5
        [HttpGet("{id}")]
        public Course Get(int id)
        {
            return courses.Find(x => x.CourseId == id);
        }

        // POST api/<Controller>
        [HttpPost]
        public void Post([FromBody] Course value)
        {
            courses.Add(value);
        }

        // PUT api/<Controller>/5
        [HttpPut("{id}")]
        public Course Put(int id, [FromBody] Course value)
        {
            Course temp = courses.Find(x => x.CourseId == id);
            temp.CourseName = value.CourseName;
            temp.CategoryId = value.CategoryId;
            temp.numOfLesson = value.numOfLesson;
            temp.StartDate = value.StartDate;
            temp.Syllabus = value.Syllabus;
            temp.FormLearninig = value.FormLearninig;
            temp.Picture = value.Picture;

            return temp;
        }

        // DELETE api/<Controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            courses.Remove(courses.Find(x => x.CourseId == id));
        }
    }
}
