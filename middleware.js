// middleware.js
function middleware(req, res, next) {
    // Middleware logic here
}

module.exports = middleware;
function attachTrace(req, res, next) {
    // Trace object provided
    // index.spec.js
const middleware = require('../middleware');
const traceObj = {
        id: "zx43494mdAds",
        timestamp: 1585509746462,
        path: "/C:\Users\Samuel.Nwabueze\Downloads\e9_f5_30d4_1333_494c_b322_99a63068271a_master"
    };

    // Attach trace object to request
    req.trace = traceObj;

    next();
}

module.exports = attachTrace;
