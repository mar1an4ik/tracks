import React from "react"
import Main from "./Main";
import {connect} from "react-redux";
import {findTracksThunk, setTracksThunk, setArtistInfoThunk, setFindedTracks} from "./TracksReducer";

let stateGo = (state) => {
    return {
        arrayTracks: state.trackTree.tracks, //tracks
        arrayArtistInfo: state.trackTree.artistInfo, // artist details
        findedTracks:state.trackTree.findedTracks, // finded tracks (search)
    }
};

const MainContainer = connect(stateGo, {setTracksThunk,setArtistInfoThunk,findTracksThunk,setFindedTracks})(Main);


export default MainContainer