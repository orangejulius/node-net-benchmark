const fastify = require('fastify')()

const bigJsonResponse = {
    "continent": [
          {
                  "id": 102191575,
                  "name": "North America",
                  "centroid": {
                            "lat": 56.498698,
                            "lon": -92.335587
                          },
                  "bounding_box": "-179.143503,5.515082,179.780935,83.634101"
                }
        ],
    "country": [
          {
                  "id": 85633793,
                  "name": "United States",
                  "abbr": "USA",
                  "centroid": {
                            "lat": 45.964509,
                            "lon": -113.2686
                          },
                  "bounding_box": "-179.231086,18.86546,179.859681,71.441059"
                }
        ],
    "county": [
          {
                  "id": 102084423,
                  "name": "Suffolk County",
                  "centroid": {
                            "lat": 42.348659,
                            "lon": -70.985637
                          },
                  "bounding_box": "-71.191155,42.22788,-70.648072,42.450096"
                }
        ],
    "localadmin": [
          {
                  "id": 404476573,
                  "name": "Boston",
                  "centroid": {
                            "lat": 42.319028,
                            "lon": -71.080171
                          },
                  "bounding_box": "-71.191155,42.22788,-70.9235839844,42.397398"
                }
        ],
    "locality": [
          {
                  "id": 85950361,
                  "name": "Boston",
                  "centroid": {
                            "lat": 42.317974,
                            "lon": -71.088246
                          },
                  "bounding_box": "-71.1912490997,42.227911131,-70.9227798807,42.3969775021"
                }
        ],
    "neighbourhood": [
          {
                  "id": 85807537,
                  "name": "Brighton",
                  "centroid": {
                            "lat": 42.348348,
                            "lon": -71.154935
                          },
                  "bounding_box": "-71.1748495315,42.3302405199,-71.1351738655,42.3667551817"
                }
        ],
    "region": [
          {
                  "id": 85688645,
                  "name": "Massachusetts",
                  "abbr": "MA",
                  "centroid": {
                            "lat": 42.16009,
                            "lon": -71.503987
                          },
                  "bounding_box": "-73.508142,41.187053,-69.858861,42.88679"
                }
        ]
};

fastify.get('/', function (req, res) {
  res.send('hello world')
})

fastify.get('/json', function(req, res) {
  res.send({ message: 'hello world'});
});

fastify.get('/bigjson', function(req, res) {
  res.send(bigJsonResponse);
});


fastify.listen(3001)
