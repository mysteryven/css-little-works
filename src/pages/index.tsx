import type { FC } from 'react'
import React from 'react'
import works from '../works'
import { mainPanel, menuItem, menuItemName, panelGrid as panelGrid, panelTitle } from '../css/index.css'

const Main: FC = () => {
  return (
    <div className={mainPanel}>
      <div>
        <div className={panelTitle}>CSS Animation</div>
        <pre className={panelGrid}>
          {
            works.map((item, index) => {
              return (
                <div key={item.name} className={menuItem}>
                  <span>{index.toString().padStart(3, '0')}</span>
                  <b className={menuItemName}>{item.name}</b>
                </div>
              )
            })
          }
        </pre>
      </div>
    </div>
  )
}

export default Main