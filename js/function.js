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

// const search = function (movies, entered, type) {
//     let result = []
//     if(type == "year"){
//         for(let item of movies) {
//             if(entered == item.year){
//                 result.push('\n name : '+ item.name + ' year : '+item.year)
//             }
//         }
//     }else{
//         for(let item of movies) {
//             if(entered == item.name){
//                 result.push('\n name : '+ item.name + ' year : '+item.year)
//             }
//         }
//     }
//     if(result.length < 1){
//         result.push("not found !")
//     }
//     return result
//}

const search = function (movies, entered, type) {
    let result = []
    for(let item of movies){
        if (entered == item[type]){
             result.push('\n name : '+ item.name + ' year : '+item.year)
        }
    }
    if(result.length < 1){
        result.push("not found !")
    }
    return result
}

//validate
const RECURSION = function () {
    const movieName = prompt("Please, enter movie name")
    if(movieName.length < 2){
            alert("Incorrect name, try again ! ")
            RECURSION()
    }else{
        const movieYear = prompt("Please, enter movie release date")
        if(movieYear.length == 4 && movieYear > 1900 && movieYear < 2017){
            program.movies.push({
                "name": movieName,
                "year": movieYear
            })
        }else{
            alert("Incorrect data, try again ! ")
            RECURSION()
        }
    }
}