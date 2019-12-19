// npm install react-gesture-gallery react-gesture-responder

import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { graphql, useStaticQuery } from "gatsby"

let maxLen = 0
const Slider = () => {
    const [index, setIndex] = React.useState(0);
    const [inc, setInc] = React.useState(1);
    
/* eslint-disable */
    React.useEffect(() => {
      if(maxLen>0){
        const timer = setInterval(() => {

            if (index === maxLen-1) setInc(-1)
            if (index === 0) setInc(1)
            setIndex(prev => prev + inc);
            
        }, 3000);

        return () => clearInterval(timer);
      }
    }, [index]);
/* eslint-enable */

    const {
        allDatoCmsProject: { edges: photos },
    } = useStaticQuery(allFeaturePhotoQuery)

    const images = photos.map(photo => photo.node.featuredphoto.fluid.src)
    maxLen = images.length

    return(
        <Gallery
            style={{
                background: "white",
                height: "100%",
                width: "100%",
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
            enableIndicators={false}
            enableControls={false}
            enableKeyboard={false}
            >
            {images.map((image, index) => (
                <GalleryImage objectFit="cover" key={index} src={image} />
            ))}
        </Gallery>

    )
}

export default Slider

const allFeaturePhotoQuery = graphql`
    query {
        allDatoCmsProject {
            edges {
                node {
                    featuredphoto {
                        fluid {
                            src
                        }
                    }
                }
            }
        }        
}
`