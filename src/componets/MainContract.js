import React, {Component} from "react";
import {Form, Col, Table, Row, Container ,Button ,ButtonToolbar} from 'react-bootstrap';
import SignatureCanvas from 'react-signature-canvas'
class MainContract extends Component {
    render() {
        return (
            <React.Fragment>
                <h1> SLA contract</h1>
                <div>

                <Form>

                    <Form.Row>
                        <Col>
                            <Form.Control as="select" >
                                <option>Customer</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control as="select">
                                <option>Service Provider</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>

                </Form>
                </div>
                <br/>

                <h2> Metrics</h2>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Name ( Metric ) </th>
                        <th>Description</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Health check</td>
                        <td>--</td>
                        <td>
                            <Form.Check type="checkbox" label="" />
                       </td>


                    </tr>
                    <tr>
                        <td>Downtime</td>
                        <td>--</td>
                        <td>
                            <Form.Check type="checkbox" label="" />
                        </td>

                    </tr>

                    </tbody>
                </Table>
                <Container>
                <Row>
                    <Col>
                        <fieldset>
                            <legend>Customer Signature :</legend>
                            <SignatureCanvas penColor='black' canvasProps={{width: 500, height: 150, className: 'sigCanvas'}} />

                        </fieldset>
                    </Col>
                    <Col>
                        <fieldset>
                            <legend>Service Provider Signature :</legend>
                        <SignatureCanvas penColor='black' canvasProps={{width: 500, height: 150, className: 'sigCanvas'}} />
                        </fieldset>
                    </Col>
                </Row>
                    <ButtonToolbar>
                        <Col>
                        </Col>
                        <Col>
                            <Row>
                            <Col>
                                <Button variant="warning">Cancel</Button>
                            </Col>
                            <Col>
                                <Button variant="success">Continue</Button>
                            </Col>
                            </Row>
                        </Col>
                    </ButtonToolbar>
                </Container>



            </React.Fragment>

        );
    }
}

export default MainContract;