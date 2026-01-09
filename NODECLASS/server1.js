const fs = require("fs");
const path = require("path");

// absolute path (no Code Runner issues)
const logFilePath = path.join(__dirname, "log.txt");

/*
====================================
ASYNC METHODS
====================================
*/

// unlinkFile (ASYNC) – delete file
function unlinkFile() {
    fs.unlink(logFilePath, (err) => {
        if (err) {
            console.log("File does not exist to delete");
            return;
        }
        console.log("File deleted (async)");
    });
}

/*
====================================
SYNC METHODS
====================================
*/

// readFileSync – read file
function readFileSyncExample() {
    try {
        const data = fs.readFileSync(logFilePath, "utf-8");
        console.log("Read (sync):", data);
    } catch (err) {
        console.log("Read error:", err.message);
    }
}

// writeFileSync – overwrite file
function writeFileSyncExample() {
    fs.writeFileSync(logFilePath, "New log data");
    console.log("File written (sync)");
}

// appendFileSync – append data
function appendFileSyncExample() {
    fs.appendFileSync(logFilePath, "\nThis is appended log data");
    console.log("Data appended (sync)");
}

// unlinkFileSync – delete file
function unlinkFileSyncExample() {
    try {
        fs.unlinkSync(logFilePath);
        console.log("File deleted (sync)");
    } catch (err) {
        console.log("Delete error:", err.message);
    }
}

/*
====================================
TASK FUNCTIONS (REAL USE CASE)
====================================
*/

// readLogFile()
function readLogFile() {
    fs.readFile(logFilePath, "utf-8", (err, data) => {
        if (err) {
            console.log("Read error:", err.message);
            return;
        }
        console.log("Log file content:\n", data);
    });
}

// writeLogFile("new log data")
function writeLogFile(content) {
    fs.writeFile(logFilePath, content, (err) => {
        if (err) throw err;
        console.log("Log file written");
    });
}

// appendLogFile(" this is appended log data")
function appendLogFile(content) {
    fs.appendFile(logFilePath, "\n" + content, (err) => {
        if (err) throw err;
        console.log("Log file appended");
    });
}

// deleteLogFile()
function deleteLogFile() {
    fs.unlink(logFilePath, (err) => {
        if (err) {
            console.log("File already deleted");
            return;
        }
        console.log("Log file deleted");
    });
}

/*
====================================
CALLING THE TASK FUNCTIONS
(uncomment ONE BY ONE to test)
====================================
*/

writeLogFile("new log data");
appendLogFile("this is appended log data");
readLogFile();
//deleteLogFile();
