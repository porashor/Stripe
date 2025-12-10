import React from 'react'
import FormAmount from "./component/FormAmount.jsx"
import DepositeForm from "./component/DepositeForm.jsx"
import SuccessCard from './component/SuccessCard.jsx'
import CencelPayment from './component/CencelPayment.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FormAmount />} />
          <Route path="/deposit" element={<DepositeForm />} />
          <Route path="/success" element={<SuccessCard />} />
          <Route path="/cancel" element={<CencelPayment />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
