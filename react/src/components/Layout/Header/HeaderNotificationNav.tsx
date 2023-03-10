import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Badge, Nav } from 'react-bootstrap'

const alertCount = 3;

export default function HeaderNotificationNav() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon icon={faBell} size="lg" /> 
          <Badge bg="info" className="ms-2">3</Badge>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
