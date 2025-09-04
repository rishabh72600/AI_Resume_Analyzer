import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comments: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:8080/api/feedback', {
        name: formData.name,
        email: formData.email,
        rating: parseInt(formData.rating),
        comments: formData.comments
      });

      setSuccess('Thank you for your feedback!');
      setFormData({
        name: '',
        email: '',
        rating: 5,
        comments: ''
      });
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Share Your Feedback</h3>
            </Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Rating</Form.Label>
                  <Form.Select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ Excellent (5)</option>
                    <option value={4}>⭐⭐⭐⭐ Very Good (4)</option>
                    <option value={3}>⭐⭐⭐ Good (3)</option>
                    <option value={2}>⭐⭐ Fair (2)</option>
                    <option value={1}>⭐ Poor (1)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Tell us about your experience with AI Resume Analyzer..."
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit Feedback'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Body>
              <h5>What we do with your feedback:</h5>
              <ul>
                <li>Improve our AI algorithms for better resume analysis</li>
                <li>Enhance user experience and interface</li>
                <li>Add new features based on user suggestions</li>
                <li>Fix bugs and performance issues</li>
                <li>Help other users by sharing insights</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;
