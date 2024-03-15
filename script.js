

chrome.storage.sync.get(['city'], function(data) {
    if (!data.city) return;

    // Queue Shrek Theme
    const body = document.querySelector('body');
    body.style.background = '#8cb04e';
    body.style.fontFamily = 'Shrek';
    body.style.color = '#5c452d';

    const song = document.querySelector('#shrekTheme');
    song.volume = 0.1;
    song.play();

    // grab city to search
    let searchCity = data.city;
    const city = document.querySelector('#city');
    city.innerHTML = searchCity;

    // concat search city into url
    const url = 'http://api.weatherapi.com/v1/current.json?key=3a9dfaed35554730ac623742241403&q=' + searchCity;

    // fetch weather data
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // set weather pic
        const pic = document.querySelector('#weather-pic');
        const picURL = 'https:' + data.current.condition.icon;
        pic.setAttribute('src',picURL);

        // set local time
        const time = document.querySelector('#time');
        time.innerHTML = data.location.localtime;

        // set temp
        const temp = document.querySelector('#temp');
        temp.innerHTML = data.current.temp_f;

        // set UV
        const uv = document.querySelector('#uv');
        uv.innerHTML = data.current.uv;

        // set wind
        const windDir = document.querySelector('#wind-dir');
        windDir.innerHTML = data.current.wind_dir;
        const windSpeed = document.querySelector('#wind-speed');
        windSpeed.innerHTML = data.current.wind_mph;

        // set shrek pic
        const shrekPic = document.querySelector('#shrek');
        shrekPic.setAttribute('src','shrek.webp');

        // set shreks words
        const shrekWords = document.querySelector('#shrekWords');
        let shrekVoice;
        if (data.current.temp_f < 50) {
            shrekWords.innerHTML = 'brr pretty chilly, put on my vest';
            shrekVoice = document.querySelector('#shrekCold');
        } else if (data.current.temp_f < 80) {
            shrekWords.innerHTML = 'perfect day in the swamp to take Fiona out';
            shrekVoice = document.querySelector('#shrekWarm');
        } else {
            shrekWords.innerHTML = 'So hot, probably the fire breathing dragon again';
            shrekVoice = document.querySelector('#shrekHot');
        }

        shrekVoice.play();

      })
      .catch((error) => console.log(error));
})





