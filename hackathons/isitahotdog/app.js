var unirest = require("unirest");

var req = unirest("GET", "https://api.restb.ai/segmentation");

req.query({
  "client_key": "cb0d00446f124ddf4896daa9a11497fd9a9ce886cafa2d77c0b0fdd7e4ede5f3",
  "model_id": "re_logo",
  "image_url": "http://demo.restb.ai/img/gallery/realestate/logos-watermarks/re_logo-1.jpg"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});