import React, {Component} from 'react';

class ThemLoai extends Component {
    constructor(props){
        super(props);
            this.state = {
                id : '',
                name : '',
            }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
        this.CloseForm = this.CloseForm.bind(this);
    }
    componentWillMount(){
        var item = this.props.MucLucEditing ? this.props.MucLucEditing : {id:'',name:""};
        this.setState({
            name : item.name,
            id : item.id
        });
    }
    componentWillReceiveProps(NextProps){
        //console.log(NextProps)
        if(NextProps && NextProps.MucLucEditing){
            this.setState({
                name : NextProps.MucLucEditing.name,
                id : NextProps.MucLucEditing.id
            });
        }
    }
    onChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
    onClear(){
        this.setState({
            name : '',
            id :'',
        });
    }
    // onSubmit tu form them
    onSubmit(){
        event.preventDefault();
        var name =  this.state.name;
        //console.log(this.state.id);
        var id = this.state.id;
        //TH thêm
        if(id===''){
            fetch('/api/mucluc/them', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                }),
            }).then((response) => response.json())
        }
        //TH sửa
        else{
            //console.log('sua');
            fetch('/api/mucluc/edit/'+id, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                }),
            }).then((response) => response.json())
        }
        this.onClear();
       this.props.onSubmit();
       this.CloseForm();       
    }
    CloseForm(){
        this.props.CloseForm();
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.id=='' ? 'Thêm Mới ' : 'Cập nhật mới'} </h3> 
                        <button onClick={this.CloseForm}>Đóng</button>
                    </div>
                    <div className="panel-body">
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control"
                                name = "name" 
                                value = {this.state.name}
                                onChange = {this.onChange}
                                />
                            </div>
                           
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Lưu</button>&nbsp;
                                <button type="submit" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThemLoai