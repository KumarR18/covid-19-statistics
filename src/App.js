import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";

function App() {
  const [results, setResults] = useState([]);
  const [searchRegion, setSearchRegion] = useState("");

  useEffect(() => {
    axios
    .all([
      axios.get("https://covid-dashboard.herokuapp.com/api/countries/Germany")
    ])
    .then(resArr => {
      setResults(resArr[0].data[0]);
    })
    .catch(err => {
      console.error();
    });
  }, []);

  return (
    <div>
      <br/>
        <h2 style={{ textAlign: "center"}}> COVID-19 Germany Data </h2>
      <br/>
    <CardDeck>
    <Card
    className="text-center"
    bg={"secondary"}
    text={'white'}
    style={{ margin: "10px"}}>
      <Card.Body>
        <Card.Title>Confirmed</Card.Title>
        <Card.Text>
          {results.confirmed}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>{results.lastUpdate}</small>
      </Card.Footer>
    </Card>
    <Card
    className="text-center"
    bg={"danger"}
    text={'white'}
    style={{ margin: "10px"}}>
      <Card.Body>
        <Card.Title>Deaths</Card.Title>
        <Card.Text>
        {results.deaths}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>{results.lastUpdate}</small>
      </Card.Footer>
    </Card>
    <Card 
    className="text-center"
    bg={"success"}
    text={'white'}
    style={{ margin: "10px"}}>
      <Card.Body>
        <Card.Title>Recovered</Card.Title>
        <Card.Text>
        {results.recovered}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>{results.lastUpdate}</small>
      </Card.Footer>
    </Card>
  </CardDeck>
  <Form>
  <Form.Group controlId="formGroupSearch">
    <Form.Control type="text" placeholder="Search" 
    onChange={e => setSearchRegion(e.target.value)}/>
  </Form.Group>
</Form>

  {/* <Columns>
  {countries}
  </Columns> */}
  
  </div>
  );
}

export default App;
