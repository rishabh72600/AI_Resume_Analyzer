import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/');
  };

  const isLoggedIn = !!token;
  const isAdmin = userRole === 'ADMIN';

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="navbar-modern"
      style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => navigate('/')}
          className="brand-modern"
          style={{
            fontWeight: '700',
            fontSize: '1.5rem',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{
            fontSize: '1.8rem',
            filter: 'drop-shadow(0 0 10px rgba(102, 126, 234, 0.5))'
          }}>
            🤖
          </span>
          AI Resume Analyzer
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            border: 'none',
            background: 'linear-gradient(135deg, #667eea, #764ba2)'
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link
                  onClick={() => navigate('/dashboard')}
                  className="nav-link-modern"
                  style={{
                    color: '#ecf0f1',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    margin: '0 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  📊 Dashboard
                </Nav.Link>
                {isAdmin && (
                  <Nav.Link
                    onClick={() => navigate('/admin')}
                    className="nav-link-modern"
                    style={{
                      color: '#ecf0f1',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      margin: '0 5px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    ⚙️ Admin Panel
                  </Nav.Link>
                )}
                <Nav.Link
                  onClick={() => navigate('/feedback')}
                  className="nav-link-modern"
                  style={{
                    color: '#ecf0f1',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    margin: '0 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  💬 Feedback
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  onClick={() => navigate('/login')}
                  className="nav-link-modern"
                  style={{
                    color: '#ecf0f1',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    margin: '0 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  🔐 Login
                </Nav.Link>
                <Nav.Link
                  onClick={() => navigate('/register')}
                  className="nav-link-modern"
                  style={{
                    color: '#ecf0f1',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    margin: '0 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  📝 Register
                </Nav.Link>
                <Nav.Link
                  onClick={() => navigate('/feedback')}
                  className="nav-link-modern"
                  style={{
                    color: '#ecf0f1',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    margin: '0 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  💬 Feedback
                </Nav.Link>
              </>
            )}
          </Nav>
          {isLoggedIn && (
            <Nav>
              <Button
                variant="outline-light"
                onClick={handleLogout}
                className="btn-logout-modern"
                style={{
                  background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '8px 20px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
                }}
              >
                🚪 Logout
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
