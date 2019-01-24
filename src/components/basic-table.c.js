import React from 'react'
import { TH } from './shared/basic-html.sc'
const RTable = ({ header, data }) => {
  return (
    <table>
      <RTableHead header={header} />
      <RTableBody />
    </table>
  )
}

const RTableHead = ({ header }) => {

  return (
    <thead>
      <tr>
        {header.map((x, i) => <TH content={x} />)}
      </tr>
    </thead>
  )
}

const RTableBody = () => {
  return (
    <tbody>
      <tr>
        <td>First Col</td>
        <td>Col 2</td>
      </tr>
    </tbody>
  )
}


export { RTable, RTableHead }