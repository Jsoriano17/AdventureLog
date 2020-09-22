using System;

namespace Domain
{
    public class Message
    {
        public Guid Id { get; set; }
        public string Description {get; set;}
        public string Author {get; set;}
    }
}