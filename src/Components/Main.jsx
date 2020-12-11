import {useEffect, useState} from "react";
import OpenArtist from "./OpenArtist";
import React from "react"
import TracksList from "./TracksList";
import {setArtistInfo} from "./TracksReducer";


const Main = (props) => {
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.setTracksThunk(); // InitializeThunk
    }, [])

    useEffect(() => {
        props.setArtistInfoThunk(currentId);  //If clicked initialize Info about artist
    }, [currentId])

    return (
        currentId
            ? <OpenArtist setCurrentId={setCurrentId}
                          arrayArtistInfo={props.arrayArtistInfo}
                          currentId={currentId}/>
            : <TracksList setCurrentId={setCurrentId}
                          arrayTracks={props.arrayTracks}
                          findedTracks={props.findedTracks}
                          findTracksThunk={props.findTracksThunk}
                          setFindedTracks={props.setFindedTracks}/>
    )
}


export default Main