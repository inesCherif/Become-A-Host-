import React from 'react'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Introduction from './pages/intoduction/Introduction'
import Loading from './pages/loading/Loading'
import ProfileInformation from "./pages/steps/step1/profile-info/ProfileInformation.jsx"
import ProfilePhoto from "./pages/steps/step1/profile-photo/ProfilePhoto.jsx"
import Location from "./pages/steps/step1/location/Location.jsx"
import Languages from './pages/steps/step1/languages/Languages.jsx'
import Passions from './pages/steps/step1/passions/Passions.jsx'
import Overview from './pages/steps/step2/overview/Overview.jsx'
import Expertise from './pages/steps/step2/expertise/Expertise.jsx'
import Access from './pages/steps/step2/access/Access'
import Connection from './pages/steps/step2/connection/Connection.jsx'
import Theme from './pages/steps/step3/idea-theme/Theme'
import Title from './pages/steps/step3/idea-title/Title'
import Act from './pages/steps/step3/idea-to-do/Act'
import Provision from './pages/steps/step3/idea-provision/Provision'
import Requirements from './pages/steps/step3/idea-requirements/Requirements'
import Locations from './pages/steps/step3/idea-localisation/Locations'
import Photos from './pages/steps/step3/idea-photos/Photos'
import Size from './pages/steps/step4/setings-size/Size'
import Availability from './pages/steps/step4/setings-availability/Availability'
import Pricing from './pages/steps/step4/setings-pricing/Pricing'
import Bookings from './pages/steps/step4/setings-bookings/Bookings'
import Review from './pages/steps/step4/setings-review/Review'
import MyPhotos from './pages/steps/step3/idea-photos/MyPhotos'



const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Introduction />}  />
          <Route path='/loading' element={<Loading />}  />
          <Route path='/loading' element={<Loading />}  />
          <Route path='/profileInformation' element={<ProfileInformation />}  />
          <Route path='/photo' element={<ProfilePhoto />}  />
          <Route path='/location' element={<Location />}  />
          <Route path='/languages' element={<Languages />}  />
          <Route path='/passions' element={<Passions />}  />
          <Route path='/overview' element={<Overview />}  />
          <Route path='/expertise' element={<Expertise />}  />
          <Route path='/Access' element={<Access />}  />
          <Route path='/connection' element={<Connection />}  />
          <Route path='/theme' element={<Theme />}  />
          <Route path='/title' element={<Title />}  />
          <Route path='/do' element={<Act />}  />
          <Route path='/provide' element={<Provision />}  />
          <Route path='/requirements' element={<Requirements />}  />
          <Route path='/localisation' element={<Locations />}  />
          <Route path='/photos' element={<Photos />}  />
          <Route path='/myPhotos' element={<MyPhotos />}  />
          <Route path='/groupsize' element={<Size />}  />
          <Route path='/availability' element={<Availability />}  />
          <Route path='/pricing' element={<Pricing />}  />
          <Route path='/bookings' element={<Bookings />}  />
          <Route path='/review' element={<Review />}  />
        </Routes>
    </div>
  )
}

export default App
