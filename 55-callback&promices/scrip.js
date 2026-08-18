console.log('this is promise');

setTimeout(() => {
    console.log('I am inside settimeout');

}, 2000);

setTimeout(() => {
    console.log('I am inside settimeout2');

}, 2000);

console.log('the end');

const callback = (arg) => {
    console.log(arg)

}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )


