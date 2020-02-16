import React from 'react'

const Contact = (props) => {
    //console.log(props)
    setTimeout(()=>{props.history.push('/about')},2000)
    return (
        <div className="container">
            <h4 className="center">
                Contact
            </h4>
            <p> 
            Lorem ipsum – tekst składający się z łacińskich i quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie, wzorowany na fragmencie traktatu Cycerona „O granicach dobra i zła” napisanego w 45 p.n.e. Tekst jest stosowany do demonstracji krojów pisma, kompozycji kolumny itp.
            </p>
        </div>
    )
}
export default Contact