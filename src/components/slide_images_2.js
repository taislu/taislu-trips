//import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function getFeaturedPhotos() {

    const allImagesQuery = graphql`
    query {
        allDatoCmsProject {
            totalCount
            edges {
              node {
                title
                slug
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
    const {
        allDatoCmsProject: { edges: images },
      } = useStaticQuery(allImagesQuery)

    const photos = images.map( image => image.node.featuredphoto.fluid.src)

    return photos

}

/*
const photos = [
    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
    "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  ];
*/
