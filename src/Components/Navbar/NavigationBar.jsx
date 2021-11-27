import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="w-30" href="#!"><img className="w-50 img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5t-54S9vcK4FSFCNiOPLg27RrZZ2cvIVew&usqp=CAU" alt="gitlab_logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Product" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link>GitLab: the DevOps Platform</Nav.Link>
                                <p>Discover all-in-one software delivery.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Expore GitLab</Nav.Link>
                                <p>See repositories in action with GitLab projects.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Install GitLab</Nav.Link>
                                <p>Install one package, run a complete solution.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Gitlab: the DevOps Platform</Nav.Link>
                                <p>Discover all-in-one software delivery.</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Solutions" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link>Enterprise</Nav.Link>
                                <p>Adopt one platform for endless possibilities.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Small business</Nav.Link>
                                <p>Get a DevOps platform that grows with you.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Public Sector</Nav.Link>
                                <p>Trusted by government, loved by developers.</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Resources" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link>Getting Started</Nav.Link>
                                <p>Explore our quick-start checklist.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Industry topics and trends</Nav.Link>
                                <p>Get cross-functional software delivery insights.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>GitLab Docs</Nav.Link>
                                <p>Access step-by-step tutorials and guides.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>GitLab Learn</Nav.Link>
                                <p>Watch videos and self-driven demos.</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Partners" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link>GitLab partners</Nav.Link>
                                <p>Check out our technology and channel partners.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Find a technology partner</Nav.Link>
                                <p>See our cloud partners and other integrators.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Become a technology partner</Nav.Link>
                                <p>Join our DevOps partner ecosystem.</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="pricing">Pricing</Nav.Link>
                        <NavDropdown title="Support" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link>Contact Support</Nav.Link>
                                <p>Find our how, where, and when we offer support.</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>Support resources</Nav.Link>
                                <p>Explore support documents and instructions.</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button className="btn btn-light border border-dark mx-1 px-3">Talk to an expert</Button>
                        <Button className="btn btn-warning text-white fw-bold">Get free trial</Button>
                        <Nav.Link>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
