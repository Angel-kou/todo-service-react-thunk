import React from 'react'

class SearchItem extends React.PureComponent {
    render() {
        console.log("this.props kmj", this.props);
        let input;
        return (
            <div className="dialog">
                <div>
                    <h3>Search</h3>
                    <input type="text" ref={node => input = node} placeholder="搜索" />
                </div>
                <div>
                    <input type="button" value="Search" onClick={() => {
                        console.log("value is :",input.value)
                        this.props.search(input.value);
                        input.value = ''
                    }} />
                </div>
            </div>
        )
    }
}


export default SearchItem
