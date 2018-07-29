import React from 'react'

class User extends React.PureComponent {
    render() {
        console.log("this.props kmj", this.props);
        return (
            <div className="dialog">
                <div>
                    <span>kmj</span>
                </div>
            </div>
        )
    }
}


export default User
