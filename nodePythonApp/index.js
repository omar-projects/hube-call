const express = require('express')
const {spawn} = require('child_process');
let {PythonShell} = require('python-shell');
var package_name = 'textblob'
var corpora = 'textblob.download_corpora';
const app = express()
const port = 3000

let options = {
    args : [package_name]
}

PythonShell.run('./install_package.py', 
    function(err, results)
    {
        if (err) throw err;
        else console.log(results);
    });
    
app.get('/', (req, res) => {

 var dataToSend;
 // spawn new child process to call the python script
 const python = spawn('python', ['TextBlob/testBlob.py']);
 // collect data from script
 python.stderr.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = data.toString();
 });
 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 // send data to browser
 res.send(dataToSend)
 });

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
