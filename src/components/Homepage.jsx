import React, { useState } from 'react'
import TopNav from './TopNav/TopNav'
import LeftNav from './LeftNav/LeftNav'
import MainSection from './MainSection/MainSection'

const Homepage = () => {
    const [employeeId, setEmployeeId] = useState('')
  return (
    <div>
        <TopNav/>
        <LeftNav employeeId={employeeId}/>
        <MainSection setEmployeeId={setEmployeeId}/>
    </div>
  )
}

export default Homepage