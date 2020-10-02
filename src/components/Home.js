import React from 'react';
import CustomCarousel from './Carousel';
import { Badge } from 'reactstrap';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <CustomCarousel />

        <div class="container marketing">
          <div class="row text-center">
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              <h2 class="banner-heading">Heading</h2>
              <p class="banner-subtext" style={{fontSize: 14}}>
                Autism spectrum disorders (ASDs) are a group of developmental disabilities
                that can cause significant social, communication and behavioral challenges.
                People with ASDs handle information in their brain differently than other people.
                ASDs are "spectrum disorders."  That means ASDs affect each person in different ways,
                and can range from very mild to severe.  People with ASDs share some similar symptoms,
                such as problems with social interaction.  But there are differences in when the symptoms
                start, how severe they are, and the exact nature of the symptoms.  
              </p>
              <p><a class="btn btn-secondary btn-success" href="https://autismnj.org/" role="button">AutismNJ &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              <h2 class="banner-heading">Employment <Badge color="success">!</Badge></h2>
              <p class="banner-subtext">
                New Horizons in Autism seeks motivated individuals to work or volunteer
                within community-based programs with people with autism. Intense hands on
                training provided. Experience is a definite plus. This is a great opportunity
                to join a team working together on promoting and advocating for individuals
                who can't do it on their own. This is not a job it is a career. Join us today! 
              </p>
              <p><a class="btn btn-secondary btn-success" href="https://nhautism.org/employment" role="button">Apply &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              <h2 class="banner-heading">Heading</h2>
              <p class="banner-subtext">
                We are always looking for fundraising ideas to help improve our programs and facilities.
              </p>
              <p><a class="btn btn-secondary btn-success" href="#" role="button">Apply &raquo;</a></p>
            </div>
          </div>
        </div> 

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>

      <hr class="featurette-divider" />
      
      
    </div>/*  HOME CONTAINER END */

    );
  }
}

export default Home;