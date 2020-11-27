import {Alert} from "react-bootstrap";

function Error() {
        return (
            <div className='col-md-6 col-sm-6 mt-3'>
            <Alert variant="danger" >
                <Alert.Heading>Klaida, blogai įvestas adresas!</Alert.Heading>
                <p>
                    Pasitikrinkite adresą ir bandykite iš naujo!
                    <hr/>
                    Miesto ir gatvės pavadinimai turi būti ne trumpesni kaip 4 simboliai!
                </p>
            </Alert>
                </div>
        );
}
export default Error;