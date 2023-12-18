import {Routes, Route} from 'react-router-dom'
import {Box } from '@chakra-ui/react'

import { Navbar} from './components/Navbar'
import { Home } from './pages/Home'
import { Destination } from './pages/Destination'

function App() {
  return (
    <>

      {/*Nav Bar*/}
      <Navbar />

      <Box bg={'blue'} w='100%' style={{ height: '90vh', padding:8 }}>
        <Routes>
          <Route path='/' element={<Home /> }></Route>

          <Route path='add-event' element={<Destination />} />
        </Routes>
      </Box>
    </>
  )
}

export default App;
