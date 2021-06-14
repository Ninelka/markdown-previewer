import React from 'react'
import './toolbar.scss'

class Toolbar extends React.Component {
    render() {
        return (
            <div className='toolbar'>
                {this.props.text}
            </div>
        );
    }
}

export default Toolbar