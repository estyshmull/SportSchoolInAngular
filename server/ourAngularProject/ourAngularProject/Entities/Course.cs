namespace ourAngularProject.Entities
{
    public enum EformLearning
    {
        frontal, zoom
    }
    public class Course
    {
        public int CourseId { get; }
        public string CourseName { get; set; }
        public int CategoryId { get; set; }
        public int numOfLesson { get; set; }
        public DateTime StartDate { get; set; }
        public List<string> Syllabus { get; set; }
        public EformLearning FormLearninig { get; set; }
        public int LecturerId { get; set; }
        public string Picture { get; set; }
        
        static int id = 1;

        public Course()
        {
            CourseId = id++;
        }
    }
}
