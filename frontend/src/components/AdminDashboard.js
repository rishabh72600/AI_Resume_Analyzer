import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Alert, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const token = localStorage.getItem('token');
      const [usersRes, feedbackRes, statsRes] = await Promise.all([
        axios.get('http://localhost:8080/api/admin/users', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:8080/api/admin/feedback', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:8080/api/admin/stats', {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      setUsers(usersRes.data);
      setFeedback(feedbackRes.data);
      setStats(statsRes.data);
    } catch (err) {
      setError('Failed to load admin data');
    } finally {
      setLoading(false);
    }
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const exportData = async (type) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/admin/export/${type}`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${type}_data.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Failed to export data');
    }
  };

  if (loading) {
    return <Container className="mt-4"><div>Loading admin dashboard...</div></Container>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Admin Dashboard</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          {/* Statistics Cards */}
          <Row className="mb-4">
            <Col md={3}>
              <Card>
                <Card.Body className="text-center">
                  <h3 className="text-primary">{stats.totalUsers || 0}</h3>
                  <p>Total Users</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body className="text-center">
                  <h3 className="text-success">{stats.totalResumes || 0}</h3>
                  <p>Total Resumes</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body className="text-center">
                  <h3 className="text-info">{stats.averageScore || 0}</h3>
                  <p>Average Score</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body className="text-center">
                  <h3 className="text-warning">{stats.totalFeedback || 0}</h3>
                  <p>Feedback Count</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Export Buttons */}
          <Row className="mb-4">
            <Col>
              <Button variant="primary" onClick={() => exportData('users')} className="me-2">
                Export Users Data
              </Button>
              <Button variant="success" onClick={() => exportData('resumes')}>
                Export Resumes Data
              </Button>
            </Col>
          </Row>

          {/* Users Table */}
          <Card className="mb-4">
            <Card.Header>
              <h5>Users</h5>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <Button
                          variant="info"
                          size="sm"
                          onClick={() => handleViewUser(user)}
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Feedback Table */}
          <Card>
            <Card.Header>
              <h5>Recent Feedback</h5>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Comments</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {feedback.slice(0, 10).map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.rating}/5</td>
                      <td>{item.comments}</td>
                      <td>{new Date(item.timestamp).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* User Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <div>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Role:</strong> {selectedUser.role}</p>
              <p><strong>Created:</strong> {new Date(selectedUser.createdAt).toLocaleDateString()}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
