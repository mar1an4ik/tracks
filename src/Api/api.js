import * as axios from "axios";

const API_KEY = "&api_key=aa56245cf1ace076047f483492d92c57";

const instance = axios.create({

    baseURL: "https://ws.audioscrobbler.com/2.0",

});

export const api = {

    getPhotos() {
        return instance.get(`?method=chart.gettoptracks&format=json` + API_KEY).then((response) => {
console.log(response.data.tracks.track)
            return response.data.tracks.track
        });

    },
    getArtistInfo(name) {

        return instance.get(`?method=artist.getinfo&artist=${name}&format=json` + API_KEY).then((response) => {
console.log(response.data)
            return response.data
        });

    },
    findPhotos(name) {

        return instance.get(`?method=track.search&track=${name}&format=json` + API_KEY).then((response) => {


            return response.data.results.trackmatches.track
        });

    },

};