
let fs = require("fs");

function readfilepromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function cb(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })

}

let frp = readfilepromise("C:\\Users\\91821\\Documents\\Web Dev\\Automation\\raw\\facts\\f1.txt")
frp.then(function (data) {
    console.log(data + "")
})
frp.catch(function (err) {
    console.log(err + "")
})


