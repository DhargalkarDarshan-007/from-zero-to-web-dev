// function getData(dataId, getNextData) {
//         setTimeout(() => {
//             console.log('data', dataId);
//             if(getNextData){
//                 getNextData();
//             }

//         }, 3000);

// }

// //callback hell
// getData(1, () => {
//     console.log('getting data2...');
//     getData(2, () => {
//         console.log('getting data3...');
//         getData(3, () => {
//             console.log('getting data4...');
//             getData(4)
//         })

//     })

// })








function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', dataId);
            resolve("success")

        }, 3000);
    })
}


//promise chain
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//         getData(3).then((res) => {
//             console.log(res);
//         })

//     })
// })



// async await
async function getalldata() {
    console.log('getting data 1...');
    await getData(1)
    console.log('getting data 2...');
    await getData(2)
    console.log('getting data 3...');
    await getData(3)
    console.log('getting data 4...');
    await getData(4)
    console.log('getting data 5...');
}
getalldata()


