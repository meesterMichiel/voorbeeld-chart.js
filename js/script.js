(function fetchData(){
    const fakeData = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
          {
            "dt": 1732287600,
            "main": {
              "temp": 5.73,
              "feels_like": 1.38,
              "temp_min": 5.73,
              "temp_max": 5.96,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 1005,
              "humidity": 80,
              "temp_kf": -0.23
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10d"
              }
            ],
            "clouds": {
              "all": 77
            },
            "wind": {
              "speed": 7.21,
              "deg": 278,
              "gust": 13.36
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
              "3h": 0.24
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-11-22 15:00:00"
          },
          {
            "dt": 1732298400,
            "main": {
              "temp": 5.06,
              "feels_like": 1.31,
              "temp_min": 4.79,
              "temp_max": 5.06,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1009,
              "humidity": 80,
              "temp_kf": 0.27
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 66
            },
            "wind": {
              "speed": 5.21,
              "deg": 281,
              "gust": 11.72
            },
            "visibility": 9109,
            "pop": 0.97,
            "rain": {
              "3h": 1.28
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-22 18:00:00"
          },
          {
            "dt": 1732309200,
            "main": {
              "temp": 2.86,
              "feels_like": -0.17,
              "temp_min": 2.86,
              "temp_max": 2.86,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1013,
              "humidity": 86,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 49
            },
            "wind": {
              "speed": 3.14,
              "deg": 230,
              "gust": 7.07
            },
            "visibility": 10000,
            "pop": 0.99,
            "rain": {
              "3h": 1.41
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-22 21:00:00"
          },
          {
            "dt": 1732320000,
            "main": {
              "temp": 2.25,
              "feels_like": -1.1,
              "temp_min": 2.25,
              "temp_max": 2.25,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1015,
              "humidity": 86,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "half bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 54
            },
            "wind": {
              "speed": 3.39,
              "deg": 224,
              "gust": 9.5
            },
            "visibility": 10000,
            "pop": 0.72,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-23 00:00:00"
          },
          {
            "dt": 1732330800,
            "main": {
              "temp": 1.92,
              "feels_like": -1.85,
              "temp_min": 1.92,
              "temp_max": 1.92,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1016,
              "humidity": 86,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 3.89,
              "deg": 208,
              "gust": 10.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-23 03:00:00"
          },
          {
            "dt": 1732341600,
            "main": {
              "temp": 2.48,
              "feels_like": -1.49,
              "temp_min": 2.48,
              "temp_max": 2.48,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1016,
              "humidity": 85,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 4.42,
              "deg": 198,
              "gust": 12.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-23 06:00:00"
          },
          {
            "dt": 1732352400,
            "main": {
              "temp": 3.65,
              "feels_like": -0.55,
              "temp_min": 3.65,
              "temp_max": 3.65,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1016,
              "humidity": 84,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 5.4,
              "deg": 190,
              "gust": 13.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-11-23 09:00:00"
          },
          {
            "dt": 1732363200,
            "main": {
              "temp": 5.34,
              "feels_like": 1.25,
              "temp_min": 5.34,
              "temp_max": 5.34,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1013,
              "humidity": 74,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 6.2,
              "deg": 178,
              "gust": 14.89
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
              "3h": 0.18
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-11-23 12:00:00"
          },
          {
            "dt": 1732374000,
            "main": {
              "temp": 6.22,
              "feels_like": 1.9,
              "temp_min": 6.22,
              "temp_max": 6.22,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1010,
              "humidity": 65,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 7.56,
              "deg": 179,
              "gust": 18.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-11-23 15:00:00"
          },
          {
            "dt": 1732384800,
            "main": {
              "temp": 6.5,
              "feels_like": 2.1,
              "temp_min": 6.5,
              "temp_max": 6.5,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1007,
              "humidity": 65,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 8.07,
              "deg": 193,
              "gust": 19.34
            },
            "visibility": 10000,
            "pop": 0.22,
            "rain": {
              "3h": 0.39
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-23 18:00:00"
          },
          {
            "dt": 1732395600,
            "main": {
              "temp": 8.22,
              "feels_like": 4.22,
              "temp_min": 8.22,
              "temp_max": 8.22,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1007,
              "humidity": 70,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 8.53,
              "deg": 204,
              "gust": 22.23
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
              "3h": 1.37
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-23 21:00:00"
          },
          {
            "dt": 1732406400,
            "main": {
              "temp": 9.73,
              "feels_like": 6.2,
              "temp_min": 9.73,
              "temp_max": 9.73,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 1006,
              "humidity": 77,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 8.49,
              "deg": 209,
              "gust": 20.96
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
              "3h": 0.5
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-24 00:00:00"
          },
          {
            "dt": 1732417200,
            "main": {
              "temp": 10.77,
              "feels_like": 9.7,
              "temp_min": 10.77,
              "temp_max": 10.77,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 1006,
              "humidity": 69,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 8.23,
              "deg": 204,
              "gust": 20.16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-24 03:00:00"
          },
          {
            "dt": 1732428000,
            "main": {
              "temp": 10.61,
              "feels_like": 9.55,
              "temp_min": 10.61,
              "temp_max": 10.61,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1007,
              "humidity": 70,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 7.82,
              "deg": 199,
              "gust": 20.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-24 06:00:00"
          },
          {
            "dt": 1732438800,
            "main": {
              "temp": 12.08,
              "feels_like": 11.09,
              "temp_min": 12.08,
              "temp_max": 12.08,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 1007,
              "humidity": 67,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 7.92,
              "deg": 198,
              "gust": 21.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-11-24 09:00:00"
          },
          {
            "dt": 1732449600,
            "main": {
              "temp": 14.76,
              "feels_like": 13.78,
              "temp_min": 14.76,
              "temp_max": 14.76,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 1006,
              "humidity": 57,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 8.42,
              "deg": 199,
              "gust": 21.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-11-24 12:00:00"
          },
          {
            "dt": 1732460400,
            "main": {
              "temp": 15.03,
              "feels_like": 14.13,
              "temp_min": 15.03,
              "temp_max": 15.03,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 1006,
              "humidity": 59,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 8.52,
              "deg": 194,
              "gust": 21.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-11-24 15:00:00"
          },
          {
            "dt": 1732471200,
            "main": {
              "temp": 15.26,
              "feels_like": 14.56,
              "temp_min": 15.26,
              "temp_max": 15.26,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 1005,
              "humidity": 66,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 9.03,
              "deg": 193,
              "gust": 22.23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-24 18:00:00"
          },
          {
            "dt": 1732482000,
            "main": {
              "temp": 15.26,
              "feels_like": 14.54,
              "temp_min": 15.26,
              "temp_max": 15.26,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 1005,
              "humidity": 65,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 8.12,
              "deg": 192,
              "gust": 19.06
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-24 21:00:00"
          },
          {
            "dt": 1732492800,
            "main": {
              "temp": 14.86,
              "feels_like": 13.99,
              "temp_min": 14.86,
              "temp_max": 14.86,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 1004,
              "humidity": 61,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 98
            },
            "wind": {
              "speed": 8.32,
              "deg": 195,
              "gust": 19.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-25 00:00:00"
          },
          {
            "dt": 1732503600,
            "main": {
              "temp": 14.61,
              "feels_like": 13.77,
              "temp_min": 14.61,
              "temp_max": 14.61,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 1003,
              "humidity": 63,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "bewolkt",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 99
            },
            "wind": {
              "speed": 8.57,
              "deg": 188,
              "gust": 20.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-25 03:00:00"
          },
          {
            "dt": 1732514400,
            "main": {
              "temp": 14.79,
              "feels_like": 14.23,
              "temp_min": 14.79,
              "temp_max": 14.79,
              "pressure": 1003,
              "sea_level": 1003,
              "grnd_level": 1002,
              "humidity": 73,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 99
            },
            "wind": {
              "speed": 9.24,
              "deg": 192,
              "gust": 22.03
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
              "3h": 0.19
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-11-25 06:00:00"
          },
          {
            "dt": 1732525200,
            "main": {
              "temp": 14.2,
              "feels_like": 13.79,
              "temp_min": 14.2,
              "temp_max": 14.2,
              "pressure": 1003,
              "sea_level": 1003,
              "grnd_level": 1002,
              "humidity": 81,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "lichte regen",
                "icon": "10d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 8.8,
              "deg": 220,
              "gust": 18.56
            },
            "visibility": 5932,
            "pop": 1,
            "rain": {
              "3h": 1.26
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-11-25 09:00:00"
          }
        ],
        "city": {
          "id": 2803138,
          "name": "Antwerpen",
          "coord": {
            "lat": 51.2202,
            "lon": 4.4116
          },
          "country": "BE",
          "population": 459805,
          "timezone": 3600,
          "sunrise": 1732259494,
          "sunset": 1732290356
        }
      };
    console.log("fakeData: ",fakeData);

    const forecastItems = fakeData.list.slice(0, 10); //Eerste 10 waarden uit array halen.
    console.log("forecastItems: ", forecastItems);
    buildChart(forecastItems)
})();

function buildChart(forecastItems){
    // Gewenste gegevens (uren en temperatuur) uit forecastItems halen, met .map methode nieuwe array aanmaken
    const tempValues = forecastItems.map(item => item.main.temp);
    //console.log(tempValues)

    const timeValues = forecastItems.map(item => {
        //Uur uit datum string halen
        const time = item.dt_txt.split(' ')[1].slice(0, 5);
        return time;
    });

    //EXTRA: CSS Variabelen ophalen zodat de kleuren afgestemd kunnen worden op het ontwerp.
    const rootStyles = getComputedStyle(document.documentElement);
    const lineColor = rootStyles.getPropertyValue('--text-color-night').trim(); //Aanpassen naar eigen variabelen
    const pointColor = rootStyles.getPropertyValue('--background-color-day').trim(); //Aanpassen naar eigen variabelen

    //Voorziene canvas element selecteren uit HTML
    const chartElement = document.getElementById('exampleChart'); 
    
    //Nieuwe grafiek aanmaken aan de hand van chart.js bibliotheek.
    new Chart(chartElement, {
        type: 'line', //https://www.chartjs.org/docs/latest/charts/line.html
        data: {
        labels: timeValues,
        datasets: [
            {
                label: 'Temperatuur °C',
                data: tempValues,
                borderWidth: 1, // Dikte van de lijn
                borderColor: '#000', // Kleur van de lijn -> variabele : lineColor
                backgroundColor: '#fff', // Kleur van de bolletjes -> variabele pointColor
            }/*,
            {
                label: 'Iets anders °C',
                data: [4,8,2,7,6,5,4,4,9,2],
                borderWidth: 1, // Dikte van de lijn
                borderColor: '#000', // Kleur van de lijn
                backgroundColor: '#fff', // Kleur van de bolletjes
            }*/
        ]
        }/*,
        options: {
            //PopUp aanpassen
            plugins: {
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        // Pas de titel van de tooltip aan (bv. de label van de x-as)
                        title: (tooltipItems)=>{
                            //return `Datum: ${tooltipItems[0].label}`;
                            return '';
                        },
                        // Pas de tekst van de waarde aan
                        label: (tooltipItem)=>{
                            //return `Temperatuur: ${tooltipItem.raw}°C`;
                            return `${tooltipItem.raw}°C`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: Math.max(...tempValues) + 2 //Hoogte y-as max temp + 2
                }
            }
        }*/
    });
}