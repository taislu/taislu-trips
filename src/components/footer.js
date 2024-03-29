import React from "react"
import styles from "./footer.module.css"
//import menuLinks from "../constants/menu-links"
//import socialIcons from "../constants/social-icons"
//import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/**  
      <div className={styles.links}>
        {menuLinks.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      */} 
      <div className={styles.copyright}>
        copyright &copy; taislu {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
