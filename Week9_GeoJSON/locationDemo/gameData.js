const gameArea = {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                12.511222958564758,
                55.77053238832482
              ],
              [
                12.510750889778137,
                55.769859472950536
              ],
              [
                12.511571645736694,
                55.76948227315347
              ],
              [
                12.512939572334288,
                55.76944304416503
              ],
              [
                12.513223886489868,
                55.769817226754775
              ],
              [
                12.513315081596375,
                55.77041772195206
              ],
              [
                12.512269020080566,
                55.770761720058445
              ],
              [
                12.511222958564758,
                55.77053238832482
              ]
            ]
          ]
        }
}

const players = [
   { 
       "type": "Feature",
        "properties": {"name":"Jan"},
        "geometry": {
        "type": "Point",
        "coordinates": [
            12.511813044548035,
            55.77048561655559
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {"name":"Ole"},
        "geometry": {
            "type": "Point",
            "coordinates": [
            12.511705756187437,
            55.77016575650069
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {"name": "Peter"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.512499690055847,
            55.769999790343626
          ]
        }
    },
    {

      "type": "Feature",
      "properties": {"name":"Sofia"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.512623071670532,
          55.77070891352881
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"name":"Xu"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.51180499792099,
          55.77035133600312
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"name": "Lasse"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.512982487678526,
          55.7701325633258
        ]
      }
    }
]

module.exports = {
    gameArea,
    players
}