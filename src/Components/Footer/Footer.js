import React from 'react'
import "./styles.css"

function Footer(props) {

    return (
        <footer>
            {
                props.integrantes.map((elm, idx) => <article key={`${idx}${elm.nombre}`} className='names'> {elm.nombre}</article>)
            }    
        </footer>
    )

}

export default Footer
