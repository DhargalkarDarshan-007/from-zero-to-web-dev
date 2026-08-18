console.log('this is promises');


let promt1 = new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5)
    {
        reject("No random no wat not supporting you")
    }
    else{
    setTimeout(() => {
        console.log('yes i am done');
        resolve("Harry")
        
    }, 3000);
}
})

promt1.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})