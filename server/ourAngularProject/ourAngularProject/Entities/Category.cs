namespace ourAngularProject.Entities
{
    public class Category
    {
        public int CategoryId { get; }
        public string CategoryName { get; set; }
        static int id=1;
        public Category()
        {
            CategoryId = id++;
        }
    }
}
