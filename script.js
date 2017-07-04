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

const parseCommands = function (data) {
    let result = []
    for(let item of data) {
        result.push('\n command: '+ item.command + " - " + item.description)
    }
    return result
}

const parseMovies = function (param) {
    let allMov = []
    for(let item of param) {
        allMov.push('\n name : '+ item.name + ' year : '+item.year)
    }
    return allMov
}

const searchMovies = function (year, entered) {
    let search = []
    for(let item of year) {
        if(entered == item.year){
            search.push('\n name : '+ item.name + ' year : '+item.year)
        }else{
            search.push("no found !")
        }
    }
    return search
}

const searchMovies2 = function (name, enter) {
    let search = []
    for(let item of name) {
        if(enter == item.name){
            search.push('\n name : '+ item.name + ' year : '+item.year)
        }else{
            search.push("no found !")
        }
    }
    return search
}

const validate = function () {
    const movieName = prompt("Please, enter movie name")
    if(movieName.length < 2){
            alert("Incorrect name, try again ! ")
            validate()
    }else{
        const movieYear = prompt("Please, enter movie release date")
        if(movieYear.length == 4 && movieYear > 1900 && movieYear < 2017){
            program.movies.push({
                "name": movieName,
                "year": movieYear
            })
        }else{
            alert("Incorrect data, try again ! ")
            validate()
        }
    }
}

const invite = confirm("Enter the database?");

alert("To see a list of available commands, enter : commands list");

if(invite == true){
    do{
        const cmd = prompt ("Enter the command")

        if(cmd == "exit") break

        switch (cmd) {
            case "add movies": {
                validate()
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
                alert(searchMovies(program.movies, entered))
                break
            }
            case "search by name": {
                let enter  = prompt("Enter name")
                alert(searchMovies2(program.movies, enter))
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