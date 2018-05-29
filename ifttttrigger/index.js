module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body && req.body.event) {
        context.log('request body - device name: ' + req.body.event.DeviceName); 
        context.log('request body - time: ' + req.body.event.OpenedAt); 

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "event info " + req.body.event
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};