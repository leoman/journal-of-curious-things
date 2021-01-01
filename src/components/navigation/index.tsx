import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import {
  NavigationWrapper,
  Links,
  LinkWrapper,
  Link,
} from './styles'

const navLinks = [
  { name: 'Blog Posts', url: '/' },
  { name: `Kirsty's Shop`, url: '/products' },
  { name: 'Gallery', url: '/gallery' },
  { name: 'Other Item', url: '/other' },
  { name: 'Another Item', url: '/ither' }
]

const Navigation = () => {
  const [current, setCurrent] = useState('/')
  const history = useHistory()

  const linkTo = useCallback((url: string) => {
    history.push(url);
  }, [history])

  useEffect(() => {
    setCurrent(history.location.pathname);
  }, [linkTo, history])
  
  return (
    <NavigationWrapper>
      <Links>
        {navLinks.map(({ name, url }) => (
          <LinkWrapper  className={(current === url) ? 'current' : ''} key={name}>
            <Link onClick={() => linkTo(url)}>{name}</Link>
          </LinkWrapper>
        ))}
      </Links>
    </NavigationWrapper>
  )
}

export default Navigation;
