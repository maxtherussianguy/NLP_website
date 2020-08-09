import React, { Component } from 'react'
import WordItem from './WordItem'

function WordList(props) {
    let display;
    function decideDisplay(){
        if (props.data !== undefined ) {
            if (props.data.hasOwnProperty(props.read)){
                if(props.data[props.read].length>0){
                    display = "block";
                } 
                else{
                    display ="none"
                }
            }
            else{
                display = "none"
            }
        }
        else{
            display =  "none"
        }
    }
    let arr = [];
    return (
        <>
        {
            decideDisplay()
        }
        <div className={"ml-auto mr-auto col-md-8 col-sm-12 "+props.read.split("_list")[0]} style={{display:display}}>
            <h1 className="mainheading">{props.read.split("_list")[0]}</h1>
            {
                function () {
                    console.log("I RAN", props)
                    if (props.data !== undefined) {
                        console.log(props.data.status.msg == "OK")
                        if (props.data.status.msg == "OK") {
                            arr = props.data[props.read].map(concept => {
                                return <WordItem con={concept} key={concept.id} min={props.min} />
                            })
                            if(arr.length == 0){
                                arr.push(<p className="notloaded" key="notloaded">Not found</p>)
                            }
                            console.log("props data", arr)
                        }
                    }
                    else return <div className="notloaded">not loaded yet</div>;
                }()
            }

            {
                arr.map(item => {
                    return item
                })
            }
        </div>
        </>
    )
}

export default WordList
