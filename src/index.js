import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'

const App = () => {
    return (
        <div>
            <Header title="Australia-Advisor"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
