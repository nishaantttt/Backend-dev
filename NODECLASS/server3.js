const fs = require("fs");      // File System module
const path = require("path");  // Path utilities module

// absolute path using resolve
const absolutePath = path.resolve("./log.txt");

// absolute path using join + __dirname (recommended)
const joinPath = path.join(__dirname, "log.txt");

console.log("Absolute path (resolve):", absolutePath);
console.log("__dirname:", __dirname);
console.log("Basename:", path.basename("./routes/log.txt"));
console.log("Join path:", joinPath);


const pathParse = path.parse(joinPath)
console.log(pathParse)


const filepath = path.join(__dirname,"log.txt");
const data = fs.readFileSync(filepath,"utf-8");

console.log(data);


