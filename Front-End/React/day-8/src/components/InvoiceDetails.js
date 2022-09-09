import React from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { getInvoices } from '../mock/invoices'

export default function InvoiceDetails() {

  const params = useParams()
  const locations = useLocation()
  const { invoiceID } = params

  console.log(locations)
  const invoiceDetail = getInvoices().filter(invoice => {
    if (invoice.number.toString() === invoiceID) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className='d-flex flex-column'>
      {invoiceDetail.length != 0 ?
        <>
          <h3>Invoice Details</h3>
          <div>Name: {invoiceDetail[0].name}</div>
          <div>Amount: {invoiceDetail[0].amount}</div>
          <div>Due Date: {invoiceDetail[0].due}</div>
        </> : <>Invalid Invoice ID</>}

      {invoiceDetail[0].number === 1997 ? <Navigate to="/invoices" /> : null}
    </div>
  )
}
