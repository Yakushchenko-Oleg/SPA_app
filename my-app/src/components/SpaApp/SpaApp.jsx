import React from 'react'
import { quotes } from '../../utils/quotes'
import { useState } from 'react';
import { randomIndex } from '../../utils/randomIndex'
import classes from '../SpaApp/SpaApp.module.css'

const SpaApp = () => {
  
    const [listQtotes, setListQuotes] = useState(quotes)
    const [changeIndex, setChangeIndex] = useState(randomIndex(listQtotes))

    const carentQuote = listQtotes[changeIndex]

  return (
    <div className={classes.main}>
        <h1 className={classes.quote}>"{carentQuote.text}"</h1>
        <h3 className={classes.author}>{carentQuote.author}</h3>
        <button
         className={classes.button} 
         onClick={()=>{setChangeIndex(randomIndex(listQtotes))}}
         >Next quote 
         </button>
    </div>
  )
}

export default SpaApp
