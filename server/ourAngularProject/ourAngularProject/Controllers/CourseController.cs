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
           Syllabus=new List<string>{"Hand resistance", "rollers" ,"jumps", "Rounds", "bridges" },
           FormLearninig=EformLearning.zoom,CategoryId=1,LecturerId=1
          ,Picture="https://meyda.education.gov.il/files/pop/5246/%D7%A1%D7%A4%D7%95%D7%A8%D7%98-1140.jpg"},

            new Course(){CourseName="water Gymnastics", CategoryId=2, numOfLesson=10, StartDate=new DateTime(2025,04,02),
            Syllabus=new List<string>{ "Swimming strokes", "Treading water", "Aquatic fitness exercises", "Breath control",
                "Diving techniques" },LecturerId=3, FormLearninig=EformLearning.frontal,
                Picture="https://orhaganuzmap.co.il/wp-content/uploads/2016/06/hatrapez-%D7%94%D7%98%D7%A8%D7%A4%D7%96-6.png" },

           new Course(){CourseName="therapy",CategoryId=3, numOfLesson=16,StartDate=new DateTime(2024,05,09),Syllabus=new
           List<string>{ "rehabilitation plans", "Sports specific training", "treatment techniques", "Understanding Sports Injuries" },LecturerId=2,FormLearninig=EformLearning.frontal,
           Picture="https://www.startip.co.il/wp-content/uploads/2022/06/%D7%A1%D7%A4%D7%95%D7%A8%D7%98-%D7%98%D7%99%D7%A4%D7%95%D7%9C%D7%99-%D7%90%D7%99%D7%9A-%D7%9E%D7%A7%D7%99%D7%9E%D7%99%D7%9D-%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95.jpg" }
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
