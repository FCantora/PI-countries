/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export default function Card({ id, name, continent, flag }) {
    const key = id
  return (
    <div className={styles.cardContainer}>
         <img className={styles.cardImage} src={flag} alt={name} />
         <Link to={`/detail/${key}`} style={{ textDecoration: 'none' }}>
            <h2 className={styles.cardName}>{name}</h2>
         </Link>
         <h3 className={styles.continent}>{continent}</h3>
      </div>
  )
}
