import 'react-toastify/dist/ReactToastify.css';
import {Container} from 'react-bootstrap'
import CustomeCard from './components/CustomeCard';
import Header from './components/Header';


function App() {

  return (
    <>
      <Container fluid className="d-flex flex-column">
        <Header/>
        <CustomeCard/>
      </Container>
    </>
  )
}

export default App
