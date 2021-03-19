import React from 'react'
import '../login/login.css'

 const Result = (props) => { console.log(props)

    return (
        <div className="container d-flex justify-content-start">
            <div className="row col-lg-4 col-md-4 col-sm-12 sm={12}>sm=12">
                <label for="name">Sylhet </label>
              <input type="text" name="name" placeholder="Sylhet" required/> 

                <label for="name">to dhaka</label>
                <input type="text"  name=""  placeholder="Dhake" required/>

                <label for="date">bus no 3333</label>
                <label for="date">bus no 34434</label>
                <label for="date">price 6666</label>
             
             
            </div>

            <div className="row col-lg-8 col-md-8 col-sm-12 sm={12}>sm=12">
                <img src="https://raw.githubusercontent.com/AdvancedCustomFields/docs/master/assets/acf-google-map-field-interface.png" alt="map"/>
            </div>
        </div>
    )
}
export default Result 