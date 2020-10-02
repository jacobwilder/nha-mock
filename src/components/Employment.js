import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';


class Employment extends React.Component {
  render() {
    return (
      <div className="about-container text-center">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Employment</h1>
          <p className="lead">Explore a career at New Horizons in Autism!</p>
          <Button size="lg" color="success" block href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=5eda9deb-b3bb-4183-bf70-9613a20de391&ccld=19000101_000001&type=JS&lang=en_US">Join our team!</Button>
        </Container>
      </Jumbotron>
          <p>
            New Horizons in Autism, Inc. is a private, non-profit organization dedicated to serving individuals
            with Autism and their families throughout New Jersey by delivering community-based services,
            providing advocacy, support and technical assistance,  increasing public awareness and education
            about autism and contributing to the body of knowledge in the field of autism.
          </p>
          <p>
          We are seeking energetic and motivated staff to work within community-based programs with individuals 
          living with autism. Extensive and intense hands on training provided in addition to various online requirements.
          This is a great opportunity to join our team of professionals, working together on promoting and advocating for 
          individuals and independence. 
          </p>
      </div>
    );
  }
}

export default Employment;