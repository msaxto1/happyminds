import mentalhealth from './images/mentalhealth.jpg';
import { Row, Col } from 'reactstrap';

function Home() {
  return (
    <>
      <Row>
        <Col xs="12">
          <img src={mentalhealth} class='mentalhealth' alt="Mental Health"/> 
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h1 class='HomeTitle'><strong>Start your journey to mental health betterment!</strong></h1>
          <p>Let this website be your guide to a happier, healthier mindset. With Happy Minds, you can explore a variety of mental health resources, activities and tips. 
          Connecting with others with similar mental health goals is a great way to help you reach yours. 
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Home;