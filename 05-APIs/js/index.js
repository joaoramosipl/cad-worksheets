$(function () {
    'use strict';


    var clickMusic = function ($icon, $toggle) {
        $icon.toggleClass('text-danger');
        $icon.toggleClass('text-primary');
        $icon.toggleClass('fa-volume-mute');
        $icon.toggleClass('fa-music');
        $toggle.toggleClass('fa-toggle-off');
        $toggle.toggleClass('fa-toggle-on');
    };

    var $livingRoomAmbientMusicToggle = $('#livingRoomAmbientMusicToggle');
    var $livingRoomAmbientMusicIcon = $('#livingRoomAmbientMusicIcon');
    $livingRoomAmbientMusicToggle.click(function () {
        clickMusic($livingRoomAmbientMusicIcon, $livingRoomAmbientMusicToggle);
    });

    var $livingRoomAmbientLightsToggle = $('#livingRoomAmbientLightsToggle');
    var $livingRoomAmbientLightsIcon = $('#livingRoomAmbientLightsIcon');
    $livingRoomAmbientLightsToggle.click(function () {
        clickLights($livingRoomAmbientLightsIcon, $livingRoomAmbientLightsToggle);
    });

    var $kitchenLightsToggle = $('#kitchenLightsToggle');
    var $kitchenLightsIcon = $('#kitchenLightsIcon');
    $kitchenLightsToggle.click(function () {
        clickLights($kitchenLightsIcon, $kitchenLightsToggle);
    });

    var $livingRoomCeilingLightsToggle = $('#livingRoomCeilingLightsToggle');
    var $livingRoomCeilingLightsIcon = $('#livingRoomCeilingLightsIcon');

    $livingRoomCeilingLightsToggle.click(function () {
        clickLights($livingRoomCeilingLightsIcon, $livingRoomCeilingLightsToggle    );
    });  

    var clickLights = function ($icon, $toggle) {
        $icon.toggleClass('far');
        $icon.toggleClass('fas');
        $icon.toggleClass('text-warning');
        $toggle.toggleClass('fa-toggle-off');
        $toggle.toggleClass('fa-toggle-on');

        var isOn = $toggle.hasClass('fa-toggle-on');
        var date = new Date();

        console.log(date.toString());

        var toggleObject = {
            'state': isOn,
            'date': date
        };
        var idToggle = $toggle.attr('id');
        var toggleObjectString = JSON.stringify(toggleObject);
        sessionStorage.setItem(idToggle, toggleObjectString);
    };

    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');
    var date = new Date();
    dateElement.innerHTML = date.toISOString().split('T')[0];

    var atualizarTime = function () {
        var date = new Date();

        timeElement.innerHTML = [('0' + date.getHours()).slice(-2), ('0' + date.getMinutes()).slice(-2), ('0' + date.getSeconds()).slice(-2)].join(':');
    }

    setInterval(atualizarTime, 1000);
    atualizarTime();

    var temperatureKitchenElement = document.getElementById('temperatureKitchen');
    var temperatureLivingRoomElement = document.getElementById('temperatureLivingRoom');
    setInterval(function () {
        temperatureKitchenElement.innerHTML = Math.round(10 * (Math.random() * (20) + 10)) / 10 + ' °C';
        temperatureLivingRoomElement.innerHTML = Math.round(10 * (Math.random() * (20) + 10)) / 10 + ' °C';
    }, 5000);

    var $currentTemperature = $('#currentTemperature');
    var $maxTemperature = $('#maxTemperature');
    var $minTemperature = $('#minTemperature');
    var $humidity = $('#humidity');
    var $sunriseTime = $('#sunriseTime');
    var $sunsetTime = $('#sunsetTime');
    var $lastUpdate = $('#lastUpdate');

    var elapsedTime = 0;

    var $city = $('#city');
    var updateTemp = function () {
        $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + $city.val() + '&appid=bb508db73e0b52cc002c7e9a8883ab13', function (data) {
            var weather = data.main;
            $currentTemperature.text(weather.temp + " °C");
            $minTemperature.text(weather.temp_min + " °C");
            $maxTemperature.text(weather.temp_max + " °C");
            $humidity.text(weather.humidity + "%");

            var sys = data.sys;
            var sunrise = new Date(sys.sunrise * 1000);
            $sunriseTime.text(sunrise.getHours() + "h" + sunrise.getMinutes());
            var sunset = new Date(sys.sunset * 1000);
            $sunsetTime.text(sunset.getHours() + "h" + sunset.getMinutes());
            elapsedTime = 0;
        });
    };

    updateTemp();

    $("#buttonCity").on('click', updateTemp);

    var updateTimer = function (time, $element) {
        var text = '';
        var result;

        if (time < 60) {
            text = time + " second";
            result = time;
        } else if (time < 1000) {
            text = Math.floor(time / 60) + " minute";
            result = Math.floor(time / 60);
        } else {
            text = Math.floor(time / 3600) + " hour";
            result = Math.floor(time / 60);
        }
        text += (result == 1 ? '' : 's') + ' ago';

        $element.text(text);
    };

    setInterval(function () {
        updateTimer(elapsedTime, $lastUpdate);
        elapsedTime++;
    }, 1000);
});