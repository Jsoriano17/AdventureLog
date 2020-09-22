using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Messages
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Description { get; set; }
            public string Author { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var message = new Message
                {
                    Id = request.Id,
                    Description = request.Description,
                    Author = request.Author
                };
                _context.Messages.Add(message);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}