import {
  Dropdown, Image, Nav, NavItem,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsWithChildren, useEffect, useState } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

type NavItemProps = {
  icon: IconDefinition;
} & PropsWithChildren

const ProfileDropdownItem = (props: NavItemProps) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export default function HeaderProfileNav() {

  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>({ pictureUrl: "" });

  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" bsPrefix="shadow-none" className="py-0 px-2 rounded-0" id="dropdown-profile">
          <Image src={profile.pictureUrl ? profile.pictureUrl : "/assets/img/avatars/leaf.png"} alt="Logo" className="avatar position-relative" roundedCircle />
        </Dropdown.Toggle>
        <Dropdown.Menu className="pt-0">
          <Dropdown.Header className="bg-light fw-bold rounded-top">Account</Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>
            {profile.email}
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => { }}>
            <ProfileDropdownItem icon={faPowerOff} >Logout</ProfileDropdownItem>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}
