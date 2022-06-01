import React from 'react'
import BioData from './BioData'
import Hobbies from './Hobbies'
import PersonalSkills from './PersonalSkills'
import ProfessionalSkills from './ProfessionalSkills'

export default function Skills() {
  return (
    <div className="container my-4">
        <BioData/>
      <div className="row ">
          <div className="col-md-3 my-5">
                <PersonalSkills/>
           </div>
           <div className="col-md-3 my-5 mx-5">
                <ProfessionalSkills/>
            </div>
            <div className="col-md-3 my-5 mx-4">
                <Hobbies/>
            </div>
        </div>
      
    </div>
   
  )
}
