import React from 'react'

const FaceRecognition = (props) => {
    const { imageUrl } = props

    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="input-image" src={imageUrl} alt="" width="500px" height="auto"/>
            </div>
        </div>
    )
}

export default FaceRecognition;