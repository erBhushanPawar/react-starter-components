import React from 'react'
import ReactDOM from 'react-dom'
import { H1, H2 } from './components/shared/basic-html.sc'
import { RTable } from './components/basic-table.c'

const d = {
    header: ["first", "second"],
    data: ["d1", "d2"]
}

ReactDOM.render(
    <div>

        <H1 content="Hello Man" />
        <H2 content="Nice" />
        <RTable header={d.header} />
    </div>
    , document.getElementById("root"))