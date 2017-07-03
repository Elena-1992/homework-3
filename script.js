const program = {
    "movies": [],
    "commands": [
        {
            "command": 'add movies',
            "description" : "Add movies"
        },
        {
            "command": 'movies list',
            "description" : "Show all movies"
        },
        {
            "command": 'commands list',
            "description" : "Show all commands"
        },
        {
            "command": 'quantity movies',
            "description" : "Show the number of films in the database"
        },
        {
            "command": 'exit',
            "description" : "Exit from the program"
        },
        {
            "command": 'search by date',
            "description" : "Search movies by date"
        },
        {
            "command": 'search by name',
            "description" : "Search movies by date"
        }
    ]
}

const invite = confirm("Enter the database?");

alert("To see a list of available commands, enter the: commands list");