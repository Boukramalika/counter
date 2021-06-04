import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'



class Counter extends React.Component {

    render() {
        let variant = "success";
        let message = "you can increase upto 100";

        if (this.props.count === 0) {
            variant = "danger";
            message = "you can't go below 0";
        }
        if (this.props.count === 100) {
            variant = "warning";
            message = "please stop!"
        }

        let alert = (<Alert variant={variant}>
            {message}
        </Alert>);


        return (

            <div>
                <Container>

                    <Row>
                     
                        <Col style={{ display: "flex" }}>

                            <Button className="btn2"
                                variant="danger"
                                size="lg"
                                onClick={this.props.subtractFunction} >
                                -
                            </Button>
                            <h2 style={{ marginLeft: "20px", marginRight: "20px" }}> {this.props.count} </h2>


                            <Button className="btn1"
                                variant="success"
                                size="lg"
                                onClick={this.props.addFunction}>
                                +
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }


}




export default Counter
