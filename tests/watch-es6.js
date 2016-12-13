
var watch = require("node-watch"),
    command = require("child_process").exec;

watch("es6/", function (filename) {
        var arg = `node_modules/.bin/eslint ${filename}`;
        console.log(arg);
        command(arg, (err, stdout, stderr) => {console.log(err || stdout || stderr)})
});
