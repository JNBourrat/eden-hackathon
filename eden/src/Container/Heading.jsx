import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaChevronLeft } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import '../Assets/Style/Heading.css'

class Heading extends Component {
  render() {
    return (
      <div>
        <Row>
          <NavLink to="/"><h1 className="backbutton"><FaChevronLeft /></h1></NavLink>
          <Col sm="12">
            <h1>Eden</h1>
            <p className="p-app">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat est orci, et sodales mi ultricies sagittis. Curabitur non vehicula tellus, id fermentum quam. </p>
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default Heading;