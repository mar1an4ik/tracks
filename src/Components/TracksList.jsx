import React, {useEffect, useState} from "react"
import "./../App.css"

const TracksList = (props) => {

    const [findOn, setFindOn] = useState(0) // Search track check
    let ref1 = React.createRef(); //ref to textarea


    let findTracks = () => {
        let name = ref1.current.value;
        if (name) {
            props.findTracksThunk(name)
            setFindOn(1)

        } else {
            props.setFindedTracks([]);
            setFindOn(0)
        }


    }
    let handleClick = (e) => {
        props.setCurrentId(e.target.id)
    }   // click on artist and changing currentId in Main.jsx and opening other Component(OpenArtist.jsx)


    let findedTracks = props.findedTracks.map((elem) => {

        return (<div className={"imageSmall"}>
            <img className={"img"} onClick={handleClick} id={elem.artist.name} src={elem.image[1]["#text"]}/>
            <div id={"name"}>
                Name : {elem.name}
            </div>
            <div id={"author"}>
                Author : {elem.artist}
            </div>
            <div id={"author"}>
                URL : <a href={elem.url}> Link </a>
            </div>

        </div>)
    }); // finded
    let arrayPhotos = props.arrayTracks.map((elem) => {
        return (<div className={"imageSmall"}>

            <img className={"img"} onClick={handleClick} id={elem.artist.name} src={elem.image[1]["#text"]}/>
            <div id={"name"}>
                Name : {elem.name}
            </div>
            <div id={"author"}>
                Author : {elem.artist.name}
            </div>
            <div id={"author"}>
                URL : <a target="_blank" href={elem.artist.url}> Link </a>
            </div>

        </div>)
    }); // initialized


    return (<div className={"main"}>

        <div className={"top"}>
            Top tracks
        </div>
        <div className={"divTextArea"}>

            <textarea onChange={findTracks} ref={ref1} className={"textArea"} placeholder={"Enter title"}/>

        </div>
        <div className={"allTracks"}>
            {props.findedTracks.length >= 1 || findOn ? findedTracks : arrayPhotos}
        </div>
        <div id={"marianDiv"}>Created for Test Task by <span className={"marian"}> &copy;<i>marianelement@gmail.com</i></span>
        </div>

    </div>)
}

export default TracksList