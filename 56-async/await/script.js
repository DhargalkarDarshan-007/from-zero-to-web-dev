async function getData() {
    // Simulate getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

console.log("Loading modules")

console.log("Do something else")

console.log("Load data")

let data = getData()

data.then((v) => {
    console.log(v)

    console.log("process data")

    console.log("task 2")

})
