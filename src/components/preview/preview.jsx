import marked from 'marked';
import React from 'react'
import './preview.scss'

class Preview extends React.Component {
    render() {
        return (
            <div className="preview" dangerouslySetInnerHTML={{
                __html: marked(this.props.markdown)
            }}>
            </div>
        );
    }
}

export default Preview