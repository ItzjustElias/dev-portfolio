import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Container, Nav, Navbar } from 'react-bootstrap';
import DocsData from './data/Docs.json'; // Adjust the path as needed
import FallbackSpinner from './FallbackSpinner';

const Docs = (props) => {
  const { header } = props;
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for the projects data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <Container>
      {/* Centered Projects Title */}
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>{header}</h1>
      {loading ? (
        <FallbackSpinner />
      ) : (
        <>
          {/* Transparent Navbar */}
          <Navbar bg="transparent" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ justifyContent: 'center', width: '100%' }}>
                {DocsData.projects.map((project) => (
                  <Nav.Link
                    key={project.id} // Use project.id as key
                    onClick={() => handleProjectSelect(project)}
                    style={{ cursor: 'pointer', color: '#fff' }} // Change text color if needed
                  >
                    {project.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {selectedProject && (
            <Fade>
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <h3>Table of Contents</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {selectedProject.docs.map((doc) => (
                  <li key={doc.id} style={{ marginBottom: '10px' }}>
                    <a href={`#${doc.title.replace(/\s+/g, '-')}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                      {doc.title}
                    </a>
                  </li>
                ))}
              </ul>

              {selectedProject.docs.map((doc) => (
                <div key={doc.id} id={doc.title.replace(/\s+/g, '-')} style={{ marginBottom: '40px' }}>
                  <h4>{doc.title}</h4>
                  <ReactMarkdown>{doc.content}</ReactMarkdown>
                  {doc.steps.map((step) => (
                    <div key={step.id} style={{ marginBottom: '20px' }}>
                      <h5>{step.title}</h5>
                      <ReactMarkdown>{step.content}</ReactMarkdown>
                    </div>
                  ))}
                </div>
              ))}
            </Fade>
          )}
        </>
      )}
    </Container>
  );
};

Docs.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Docs;
