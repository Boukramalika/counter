import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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

            <div class="container">

                <div class="row ">

                    <div class Col style={{ display: "flex" }}>

                        <Button className="btn2"
                            variant="danger"
                            size="lg"
                            onClick={this.props.subtractFunction} >
                            -
                            </Button>
                        <h2 style={{ marginLeft: "20px", marginRight: "20px" }}> {this.props.count} </h2>


                        <Button className="btn1 "
                            variant="success"
                            size="lg"
                            onClick={this.props.addFunction}>
                            +
                            </Button>

                    </div>

                </div>
                <div class="col mt-5 ">
                    {alert}
                </div>
            </div>
        )

    }


}




export default Counter
