import React from 'react'

class SearchItem extends React.PureComponent {
    render() {
        console.log("this.props kmj", this.props);
        let input;
        return (
            <div className="dialog">

                <input type="text" className="form-control" placeholder="想说点什么" aria-label="Username"
                       aria-describedby="basic-addon1" ref={node => input = node} />


                <button type="button" className="btn btn-primary" onClick={() => {
                        this.props.search(input.value);
                        input.value = ''
                }} >Search</button>

            </div>
        )
    }
}


export default SearchItem
