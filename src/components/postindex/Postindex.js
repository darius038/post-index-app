import {Alert} from "react-bootstrap";

function Postindex(props) {
    return (
        <div className='col-md-6 col-sm-6 mt-3'>
            <Alert variant="success">
                <Alert.Heading>Jūsų adreso duomenys:</Alert.Heading>
                <p>
                    Adresas: {props.address}
                </p>
                <p>
                    Miestas: {props.city}
                </p>
                <p>
                    Savivaldybė: {props.municipality}
                </p>
                <p>
                    Paštas: {props.post}
                </p>
                <hr />
                <p className='font-weight-bold'>
                    Pašto indeksas: {props.post_code}
                </p>
            </Alert>
        </div>
    );
}
export default Postindex;