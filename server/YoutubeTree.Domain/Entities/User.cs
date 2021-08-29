using YoutubeTree.Core;

namespace YoutubeTree.Domain
{
    public class User : Entity
    {
        public string Name { get; private set; }    
        public string Email { get; private set; }

        public User(string name, string email)
        {
            Name = name;
            Email = email;
        }
    }
}