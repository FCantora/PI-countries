/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ id, name, continent, flag }) {
    const key = id
  return (
    <div /*className={styles.cardContainer}*/>
         {/* {
            pathname === '/home' && (
               <button onClick={() => onClose(key)} className={styles.closeButton}>X</button>
            )
         } */}
         {/* <p>{key}</p> */}

         <img /*className={styles.cardImage}*/ src={flag} alt={name} />
         <Link to={`/detail/${key}`} /*className={styles.cardName}*/>
            <h2 className="card-name">{name}</h2>
         </Link>
         <h3 /*className={styles.cardDetails1}*/>{continent}</h3>
         {/* <h3 className={styles.cardDetails}>{species}</h3> */}
         {/*<h3 className={styles.cardDetails}>{origin}</h3> Como se importan las prop de App (no de data.js), no va origin.name porque está definido así en app */}
      </div>
  )
}
