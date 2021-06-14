import React from 'react'
import './editor.scss'

class Editor extends React.Component {
    render() {
        return (
            <div className="editor">
                <textarea className="editor__area"
                    value={this.props.markdown}
                    type='text'
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default Editor