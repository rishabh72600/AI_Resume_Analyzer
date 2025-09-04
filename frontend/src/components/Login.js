import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card, Spinner, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <Card
        className="card-modern slide-up"
        style={{
          maxWidth: '450px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}
      >
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}
            >
              <span style={{ fontSize: '35px', color: 'white' }}>👤</span>
            </div>
            <h2
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                marginBottom: '10px'
              }}
            >
              Welcome Back
            </h2>
            <p style={{ color: '#7f8c8d', fontSize: '0.95rem' }}>
              Sign in to your account to continue
            </p>
          </div>

          {error && (
            <Alert
              variant="danger"
              className="alert-modern mb-4"
              style={{
                borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                color: '#721c24'
              }}
            >
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: '600', color: '#2c3e50' }}>
                Email Address
              </Form.Label>
              <InputGroup>
                <InputGroup.Text
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    color: 'white'
                  }}
                >
                  📧
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  style={{
                    border: '2px solid #e1e8ed',
                    borderLeft: 'none',
                    borderRadius: '0 10px 10px 0',
                    padding: '12px 15px',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 0.2rem rgba(102, 126, 234, 0.25)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e1e8ed';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: '600', color: '#2c3e50' }}>
                Password
              </Form.Label>
              <InputGroup>
                <InputGroup.Text
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    color: 'white'
                  }}
                >
                  🔒
                </InputGroup.Text>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  style={{
                    border: '2px solid #e1e8ed',
                    borderLeft: 'none',
                    borderRight: 'none',
                    padding: '12px 15px',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 0.2rem rgba(102, 126, 234, 0.25)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e1e8ed';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <InputGroup.Text
                  style={{
                    background: '#f8f9fa',
                    border: '2px solid #e1e8ed',
                    borderLeft: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#667eea';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.color = '#6c757d';
                  }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Button
              type="submit"
              disabled={loading}
              className="btn-modern w-100 mb-3"
              style={{
                padding: '14px',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>

            <div className="text-center">
              <p style={{ color: '#7f8c8d', marginBottom: '5px' }}>
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/register')}
                  style={{
                    color: '#667eea',
                    background: 'none',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    textDecoration: 'underline'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#764ba2';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#667eea';
                  }}
                >
                  Sign up here
                </button>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
