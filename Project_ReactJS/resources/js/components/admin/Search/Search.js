import React, {Component} from 'react';

class Search extends Component {
    constructor(props){
        super(props);
            this.state = {
                search : '',
            }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        }

    onChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.value.substr(0,20);
        this.setState({
            [name] : value
        });
        // var name =  this.state.search;
        // this.props.Search(name)
        //console.log(value, '')   
    }
    onClick(){
        // this.props.Search(this.state.search);
        var name =  this.state.search;
        this.props.Search(name)
    }
    render() {
        return (
            <div className="row mt-2 mb-2">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Nhập từ khóa..." 
                             name = "search" 
                            value = {this.state.search}
                             onChange = {this.onChange}
                            />
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button"
                                onClick = {this.onClick}
                                >
                                    <span className="fa fa-search mr-5"></span>Tìm
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Search