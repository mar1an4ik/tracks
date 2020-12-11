import React from "react"
import "./../App.css"
import backButton from "../Images/93634.png"

const OpenArtist = (props) => {
    let arrayTags=[];
    if (props.arrayArtistInfo.artist.tags.tag) props.arrayArtistInfo.artist.tags.tag.forEach((e)=>{
        arrayTags.push(e.name)}) // create ArrayTags for artist



    return (<div className={"page"}>

        <div className={"pageInfo"}>
<div className={"imgInfo"}>
        <img  src={props.arrayArtistInfo.artist.image[2]["#text"]} />
</div>
            <div><b>Name</b>:{props.arrayArtistInfo.artist.name}</div>
            <div><b>Tags</b>:{arrayTags.join(",")}</div>
            <div className={"bio"} dangerouslySetInnerHTML={{ __html:"<b>Bio</b>:"+props.arrayArtistInfo.artist.bio.content }} />
            <img src={backButton} id={"backButton"} onClick={() => props.setCurrentId(0)}/>


        </div>


    </div>)
}

export default OpenArtist