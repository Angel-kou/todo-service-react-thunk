import React from 'react'

class DetailInfo extends React.PureComponent {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div>
                <div class="alert alert-primary" role="alert" id="detail">ID</div>
                <div className="alert alert-primary" role="alert" id="detail">内容</div>
                <div className="alert alert-primary" role="alert" id="detail">完成情况</div>
                </div>
                <div>
                    <div className="alert alert-secondary" role="alert" id="detail">{this.props.location.state.id}</div>
                    <div className="alert alert-secondary" role="alert" id="detail">{this.props.location.state.content}</div>
                    <div className="alert alert-secondary" role="alert" id="detail">{this.props.location.state.completed?"完成":"未完成"}</div>
                </div>
            </div>

        )
    }
}


export default DetailInfo
