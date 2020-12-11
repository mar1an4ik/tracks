import React from "react"
import {api} from "../Api/api";

let initialState = {
    tracks: [],
    artistInfo:{

    },
    findedTracks:[],
};


const TracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setTracks": {
            let statecopy = {...state};
            statecopy.tracks = [...state.tracks]
            statecopy.tracks = action.arrayPhotos
            return statecopy;
        }
        case "setArtistInfo": {

            let statecopy = {...state};
            statecopy.artistInfo = {...state.artistInfo}
            statecopy.artistInfo = action.arrayInfo;

            return statecopy;
        }
        case "setFindedTracks": {

            let statecopy = {...state};
            statecopy.findedTracks = [...state.findedTracks]
            statecopy.findedTracks = action.tracks;

            return statecopy;
        }
        default: {
            return state;
        }
    }
};

export const setTracks = (arrayPhotos) => {
    return {
        type: "setTracks",
        arrayPhotos: arrayPhotos,
    }
};
export const setArtistInfo = (arrayInfo) => {
    return {
        type: "setArtistInfo",
        arrayInfo: arrayInfo,
    }
};
export const setFindedTracks = (tracks) => {
    return {
        type: "setFindedTracks",
        tracks: tracks,
    }
};

export const setTracksThunk = () => (dispatch) => {
    return api.getPhotos().then((response) => {

        dispatch(setTracks(response))  //get from api and set to REDUX
    })}
    export const setArtistInfoThunk = (name) => (dispatch) => {

    return api.getArtistInfo(name).then((response) => {

        dispatch(setArtistInfo(response))  //get from api and set to REDUX
    })};
    export const findTracksThunk = (name) => (dispatch) => {
      return  api.findPhotos(name).then((response)=>{

            dispatch(setFindedTracks(response))

        })
    };


export default TracksReducer;