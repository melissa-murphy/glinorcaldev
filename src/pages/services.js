import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Image, Row, Col } from "react-bootstrap"
import plus from "../images/icons/plus.png"

const Services = () => (
  <Layout pageInfo={{ pageName: "Services" }}>
    <SEO title="Services" />
    <Container className="services">
      <Row class="d-flex flex-column justify-content-center">
        <div class="d-flex flex-column">
          <h1>Services</h1>
          <h2>Landscape Construction Installation</h2>
          <h2>
            Residential
            <span>
              {" "}
              <Image src={plus} alt="plus" className="icon mb-1" />{" "}
            </span>
            Commercial
          </h2>
        </div>
        <Row>
          <Col md={6} class="px-lg-5">
            <h3>Masonry</h3>
            <p>
              patios, walkways, steps, landings, retaining walls, fire pits,
              fireplaces, outdoor grills, veneer, water features, lobbies
            </p>
            <h3>Carpentry</h3>
            <p>
              fencing, arbors, retaining walls, outdoor kitchens, retaining
              walls, shower screens
            </p>
            <h3>Excavation</h3>
            <p>
              cutting, trenching, digging holes, removal of soil, rocks and
              vegetation
            </p>
            <h3>Drainage</h3>
            <p>surface drains, subsurface drains, drain inlets, slope drains</p>
            <h3>Irrigation</h3>
            <p>
              mainlines, valves, controllers, spray systems, subterranean
              systems, drip systems, water eﬃcient systems,   automated systems,
              design custom systems, convert and update existing systems
            </p>
          </Col>
          <Col md={6} class="px-lg-5">
            <h3>Soil Work</h3>
            <p>
              soil testing, adjust/amend soil pH, drainage,  organic
              fertilizers/materials, import soil, ﬁne grading, ﬁll
            </p>
            <h3>Planting</h3>
            <p>
              xeriscapes, native gardens, edible gardens, shade gardens, rain
              gardens, rooftop gardens, container gardens, green roofs, trees, 
              shrubs, perennials, evergreens, annuals
            </p>
            <h3>Outdoor Lighting</h3>
            <p>
              low voltage LED landscape lighting, accent lights,  path lights,
              water lights, wiring, transformers,  deck + patio lights
            </p>
            <h3>Water Features</h3>
            <p>
              waterfalls + fountains  wall fountains, ponds,  pondless water
              features
            </p>
            <h3>Synthetic Turf</h3>
          </Col>
        </Row>
      </Row>
    </Container>
  </Layout>
)

export default Services
