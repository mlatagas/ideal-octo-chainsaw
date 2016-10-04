/**
 * Created by ANDILE25 on 26/09/2016.
 */
var connect = require('connect');
connect.createServer(
    connect.static(".../ideal-octo-chainsaw")
        ).listen(63342);