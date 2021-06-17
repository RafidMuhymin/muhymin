/* eslint-disable import/no-anonymous-default-export */
var http = require("https");

var options = {
  method: "POST",
  hostname: "api.omnisend.com",
  port: null,
  path: "/v3/contacts",
  headers: {
    "x-api-key": process.env.X_API_KEY,
    "content-type": "application/json",
  },
};

export default function (req, res) {
  var request = http.requestuest(options, function (response) {
    var chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      res.send(body.toString());
    });
  });

  request.write(
    JSON.stringify({
      createdAt: new Date().toISOString(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      identifiers: [
        {
          type: "email",
          id: req.body.email,
          channels: {
            email: {
              status: "subscribed",
              statusDate: new Date().toISOString(),
            },
          },
        },
      ],
    })
  );
  request.end();
}
