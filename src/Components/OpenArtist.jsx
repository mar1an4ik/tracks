import React from "react"
import "./../App.css"
import backButton from "../Images/93634.png"

const OpenArtist = (props) => {
    let arrayTags=[];
    if (props.arrayArtistInfo.artist.tags.tag) props.arrayArtistInfo.artist.tags.tag.forEach((e)=>{
        arrayTags.push(e.name)}) // create ArrayTags for artist



    return (<div className={"page"}>

        <img src={backButton} id={"backButton"} onClick={() => props.setCurrentId(0)}/>

        <div className={"pageInfo"}>

        <img src={props.arrayArtistInfo.artist.image[2]["#text"]} />
            <div><b>Name</b>:{props.arrayArtistInfo.artist.name}</div>
            <div><b>Tags</b>:{arrayTags.join(",")}</div>
            <div className={"bio"}><b>Bio</b>:{props.arrayArtistInfo.artist.bio.content}</div>
        <a href={props.arrayArtistInfo.artist.url}>Link</a>

        </div>


    </div>)
}

export default OpenArtist