using System.ComponentModel;

namespace ourAngularProject.Entities
{
    public class User
    {
        public int UserId { get;}
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        static int c = 1;

        public User()
        {
            UserId= c++;
        }
    }
}
