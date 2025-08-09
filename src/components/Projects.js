import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import yuktanam from "../assets/img/yuktanam.png";
import quizamania from "../assets/img/quizamania.png";
import design1 from "../assets/img/design-img1.png";
import design2 from "../assets/img/harmonize.png";
import scattle from "../assets/img/scattle.png";
import hikemaster from "../assets/img/hikemaster.png";
import smartlamp from "../assets/img/smartlamp.png";
import foodeca from "../assets/img/foodeca.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import web1 from "../assets/img/chicshop.png";
import web2 from "../assets/img/kpu.png";
import web3 from "../assets/img/lume.png"
import web4 from "../assets/img/ecommerce.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // PORTOFOLIO APLIKASI
  const application = [
    {
      title: "YukTanam Plant Detection App",
      description: "Kotlin",
      imgUrl: yuktanam,
    },
    {
      title: "Quizamania Quiz App",
      description: "Flutter",
      imgUrl: quizamania,
    },

  ];

  // PORTOFOLIO WEB
  const websites = [
    {
      title: "E-Commerce",
      description: "Next.js, Tailwind & Supabase",
      imgUrl: web4,
    },
    {
      title: "KPU Portofolio",
      description: "Laravel",
      imgUrl: web2,
    },
    {
      title: "Lume Sign Language",
      description: "React & Tailwind",
      imgUrl: web3,
    },
    {
      title: "Chicshop E-Commerce",
      description: "PHP, CSS & Javascript",
      imgUrl: web1,
    },

  ];

  // PORTOFOLIO UI/UX 
  const designs = [
    {
      title: "Mully Waste Management App",
      description: "Design & Prototype",
      imgUrl: design1,
    },
    {
      title: "Harmonize Stress Management App",
      description: "Design & Prototype",
      imgUrl: design2,
    },
    {
      title: "FOODECA Food App",
      description: "Design",
      imgUrl: foodeca,
    },
    {
      title: "Scattle Waste Management App",
      description: "Design & Prototype",
      imgUrl: scattle,
    },
    {
      title: "HikeMaster Hiking Booking App",
      description: "Design & Prototype",
      imgUrl: hikemaster,
    },
    {
      title: "SmartLamp App",
      description: "Design",
      imgUrl: smartlamp,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>With high commitment and an innovative approach, we successfully completed this project to deliver a relevant, efficient and impactful solution. The project was designed to address diverse needs, optimize resources, and create sustainable results and tangible benefits for all stakeholders.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Websites</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">UI/UX Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            application.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            websites.map((website, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...website}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            designs.map((design, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...design}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
