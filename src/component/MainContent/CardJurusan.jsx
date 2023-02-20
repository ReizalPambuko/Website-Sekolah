import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

const CardJurusan = (props) => {
    return(
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}


export default CardJurusan;