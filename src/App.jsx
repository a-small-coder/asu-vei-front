import './App.css'
import { ChakraProvider, Container } from '@chakra-ui/react'
import UploadDatabase from './components/Forms/UploadDatabase/UploadDatabase'
import theme from './theme'
import { useState } from 'react'
import apiClient from './axios'


function App() {

  const [isResponse, setIsResponse] = useState(false)

  const saveBase = (isSuccess, formValue) => {

    if (isSuccess) {
      setIsResponse(true)
      console.log(formValue)
      apiClient.post('/upload/post', {formValue})
      .then( res => {
        console.log(res)
        console.log(res.data)
        setIsResponse(false)
      })
      .finally(() => {
        setIsResponse(false)
      })
    }
    
}

  return (
    <ChakraProvider theme={theme}>
      <Container maxW='xl' m='0 auto'>
        <UploadDatabase formHandler={saveBase}/>
      </Container>
    </ChakraProvider>
    
  )
}

export default App
