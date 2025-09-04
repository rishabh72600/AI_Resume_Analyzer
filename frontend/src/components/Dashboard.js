import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert, ProgressBar, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () => {
  const [resume, setResume] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResume(file);
      setError('');
    } else {
      setError('Please select a valid PDF file');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setResume(file);
      setError('');
    } else {
      setError('Please drop a valid PDF file');
    }
  };

  const analyzeResume = async () => {
    if (!resume) return;

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', resume);

      const response = await axios.post('http://localhost:8080/api/resume/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setAnalysis(response.data);
    } catch (err) {
      setError('Failed to analyze resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Resume Analyzer Dashboard</h2>

          {error && <Alert variant="danger" className="alert-modern">{error}</Alert>}

          <Card className="mb-4 card-modern">
            <Card.Header>
              <h5>Upload Your Resume</h5>
            </Card.Header>
            <Card.Body>
              <div
                className={`upload-zone ${dragOver ? 'dragover' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="mb-3"
                    style={{ position: 'relative', zIndex: 10 }}
                  />
                  <p className="text-muted">Or drag and drop your PDF file here</p>
                </Form.Group>
              </div>
              <Button
                onClick={analyzeResume}
                disabled={!resume || loading}
                className="btn-modern w-100"
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> Analyzing...
                  </>
                ) : (
                  'Analyze Resume'
                )}
              </Button>
            </Card.Body>
          </Card>

          {analysis && (
            <Row className="fade-in">
              <Col md={6}>
                <Card className="mb-4 card-modern">
                  <Card.Header>
                    <h5>Resume Score</h5>
                  </Card.Header>
                  <Card.Body className="text-center">
                    <div className="score-display">
                      <div className="score-circle">{analysis.score}/100</div>
                    </div>
                    <ProgressBar now={analysis.score} className="mb-3 progress-modern" />
                    <p>{analysis.feedback}</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="mb-4 card-modern">
                  <Card.Header>
                    <h5>Predicted Field</h5>
                  </Card.Header>
                  <Card.Body>
                    <h4 className="text-success">{analysis.predictedField}</h4>
                    <p>Based on your skills and experience</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={12}>
                <Card className="mb-4 card-modern">
                  <Card.Header>
                    <h5>Recommended Skills</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-wrap gap-2">
                      {analysis.recommendedSkills?.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
