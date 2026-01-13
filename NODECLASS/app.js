// readLogFile()
const data = "dkfgvbkvc";
function readLogFile(  ) {
    fs.readFile(logFilePath, "utf-8", (err, data) => {
        if (err) {
            console.log("Read error:", err.message);
            return;
        }
        console.log("Log file content:\n", data);
    });
}