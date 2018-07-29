import React from 'react'

class DetailInfo extends React.PureComponent {

    constructor(props){
        super(props)
    }

    render() {

        return (
            <div className="dialog">
                <div>
                    {this.props.location.state.content}
                </div>
            </div>
        )
    }
}


export default DetailInfo
