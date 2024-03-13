namespace ourAngularProject.Entities
{
    public class Lecturer
    {
        public int LecturerId { get; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        static int id = 1;
        public Lecturer()
        {
            LecturerId = id++;
        }
    }
}
