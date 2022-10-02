import type { FC } from 'react'
import React from 'react'
import works from '../works'
import '../css/index.scss'
import { Link } from 'react-router-dom'

const Main: FC = () => {
  return (
    <div className="mainPanel">
      <div>
        <div className="panelTitle">CSS Funny Works</div>
        <pre className="panelGrid">
          {
            works.map((item, index) => {
              return (
                <Link to={item.name}  key={item.name} className="menuItem">
                  <span>{(index + 1).toString().padStart(3, '0')}</span>
                  <b className="menuItemName">{item.name}</b>
                </Link>
              )
            })
          }
        </pre>
      </div>
    </div>
  )
}

export default Main