import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { getInvoices } from '../mock/invoices'
function Invoices() {

  const invoices = getInvoices()
  return (
    <div className='d-flex'>
      <div className='d-flex flex-column'>
        {invoices.map(invoice => {
          return <NavLink style={((param) => {
            const { isActive } = param
            if (isActive) {
              const activeStyle = {
                backgroundColor: 'yellow'
              }
              return activeStyle
            }
          })} key={invoice.number} to={`/invoices/${invoice.number}`}>{invoice.name}</NavLink>
        })}
      </div>
      <Outlet />
    </div >
  )
}

export default Invoices