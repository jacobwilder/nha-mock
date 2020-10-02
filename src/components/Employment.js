import React from 'react';
import { Jumbotron, Container, Button, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

  import CardImage from '../assets/300x300.png';


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
        <div class="employment-cards">
          <Card>
            <CardBody>
              <CardTitle>Residential Manager</CardTitle>
            </CardBody>
            <img width="100%" src={CardImage} alt="Card image cap" />
            <CardBody>
              <CardText>
                  Full Time position available to manage day to day operations of a community residence including educational
                  and administrative duties required by the policies and procedures established by New Horizons in Autism.
                  A passionate leader who can successfully direct staff to provide high quality services to the individuals
                  with Autism that we serve in our residential group home. The manager will also be required to provide direct
                  care services to individuals with autism and other developmental disabilities.
                  <strong> Experience within a residential group home is required. </strong>
              </CardText>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Board Certified Behavior Analyst (BCBA)</CardTitle>
            </CardBody>
            <img width="100%" src={CardImage} alt="Card image cap" />
            <CardBody>
              <CardText>
                 Full time or Part Time Board Certified Behavior Analyst (BCBA) in good standing with minimum of one-year experience
                 working with children and/or adults with Autism.  An ideal candidate would have the following:  Experience conducting functional 
                 behavior assessments, skill acquisition programs, excellent verbal and written skills, ability to oversee behavior intervention plans,
                 provide supervision to Registered Behavior Technicians (RBT), ability to effectively collaborate with interdisciplinary teams and report to the Clinical Director.
              </CardText>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Direct Care Professional (DCP)</CardTitle>
            </CardBody>
            <img width="100%" src={CardImage} alt="Card image cap" />
            <CardBody>
              <CardText>
                  Part Time and Full Time Positions are available in our residential programs for DCP's.  The Residential Program strives for a healthy balance between a therapeutic and home environment.
                  We focus on our individuals quality of life and personal development coexisting peacefully within the community.  All DCP's work hands-on with our individuals in their home environment within our several
                  group homes located throughout New Jersey.  DCP's assist in the implementation of all behavior plans for each individual, collect and record data regarding progress, 
                  accurately dispense and recording all medications as prescribed by physician, etc.
              </CardText>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Direct Support Professional (DSP)</CardTitle>
            </CardBody>
            <img width="100%" src={CardImage} alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>After School Aide</CardTitle>
            </CardBody>
            <img width="100%" src={CardImage} alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Saturday Program Aide</CardTitle>
            </CardBody>
            <img width="100%" src={CardImage} alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Employment;