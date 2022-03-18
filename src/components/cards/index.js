import { Card } from 'react-bootstrap';


export default function Cards(props) {

  return <div className="col-lg-2">
    <Card border="primary">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.num_chamados}</Card.Title>
      </Card.Body>
    </Card>
  </div>


}