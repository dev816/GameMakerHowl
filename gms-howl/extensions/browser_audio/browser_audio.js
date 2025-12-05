window.gm_sounds    = {};
let gm_focus_volume = 1.0;

function gm_load_sound(name, url, loop = 0, volume = 1.0)
{
    window.gm_sounds[name] = new Howl({
        src: [url],
        preload: true,
        html5: true,
        volume: volume,
        loop: (loop == 1),

        onload: function() {
            let map = {};
            map["type"] = "WebAudio";
            map["event"] = "success";
            map["value"] = "Sound loaded: " + name;

            GMS_API.send_async_event_social(map);
        },

        onend: function() {
            let map = {};
            map["type"]  = "WebAudio";
            map["event"] = "ended";
            map["value"] = "Sound ended: " + name;
            map["name"]  = name;

            GMS_API.send_async_event_social(map);

            console.log("Sound ended:", name);
        },

        onloaderror: function(id, error) {
            let map = {};
            map["type"] = "WebAudio";
            map["event"] = "error";
            map["value"] = "Failed to load: " + name;
            map["code"] = error;

            GMS_API.send_async_event_social(map);
        }
    });
}

function gm_play_sound(name)
{
    if (window.gm_sounds[name]) {
        window.gm_sounds[name].play();
    }
}

function gm_is_playing(name)
{
    return window.gm_sounds[name] ? window.gm_sounds[name].playing() : false;
}

function gm_seek_sound(name, position)
{
    if (window.gm_sounds[name]) {
        window.gm_sounds[name].seek(position);
    }
}

function gm_get_duration(name)
{
    return window.gm_sounds[name] ? window.gm_sounds[name].duration() : 0;
}

function gm_get_current_time(name)
{
    return window.gm_sounds[name] ? window.gm_sounds[name].seek() : 0;
}

function gm_stop_sound(name)
{
    if (window.gm_sounds[name]) {
        window.gm_sounds[name].stop();
    }
}

function gm_set_volume(name, vol)
{
    if (window.gm_sounds[name]) {
        window.gm_sounds[name].volume(vol);
    }
}

function gm_pause_sound(name)
{
    if (window.gm_sounds[name]) {
        window.gm_sounds[name].pause();
    }
}

function gm_resume_sound(name)
{
    if (window.gm_sounds[name]) {
        window.gm_sounds[name].play(); 
    }
}


function gm_set_master_volume(vol)
{
    gm_focus_volume = vol;

    for (let s in window.gm_sounds) {
        window.gm_sounds[s].volume(vol);
    }
}


document.addEventListener("visibilitychange", function () {

    if (document.hidden) {
        for (let s in window.gm_sounds) {
            window.gm_sounds[s].volume(0);
        }
    } else {
        for (let s in window.gm_sounds) {
            window.gm_sounds[s].volume(gm_focus_volume);
        }
    }
});
