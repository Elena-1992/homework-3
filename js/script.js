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

if(invite == true){
    do{
        const cmd = prompt ("Enter the command")

        if(cmd == "exit") break

        switch (cmd) {
            case "add movies": {
                RECURSION()
                break
            }
            case "movies list": {
                alert(parseMovies(program.movies))
                break
            }
            case "commands list": {
                alert(parseCommands(program.commands))
                break
            }
            case "quantity movies": {
                alert("Number of films in the database: " + Object.keys( program.movies ).length )
                break
            }
            case "search by date": {
                let entered = prompt("Enter year")
                alert(search(program.movies, entered, "year"))
                break
            }
            case "search by name": {
                let entered  = prompt("Enter name")
                alert(search(program.movies, entered, "name" ))
                break
            }
            default:
                alert(cmd + " no found")
                break
        }
    }while(true)

}else{
    alert("Good by")
}




