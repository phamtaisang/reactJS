import React, {Component} from 'react';

class ListLoai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mucluc : []
        };
    }
    delete(id){
       fetch('/api/mucluc/delete/'+id, {
        })
        this.props.onDelete();
    }
    edit(item){
        this.props.onEdit(item);
    }
    render() {
        var mucluc = this.props.mucluc;
        //console.log(mucluc);
        return (
                <tbody>
                    <tr>
                        <td>{mucluc.id}</td>
                        <td>{ mucluc.name }</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-warning" 
                            onClick={this.edit.bind(this,mucluc)}>
                                <span className="fa fa-pencil mr-5"></span>Sửa
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-danger"
                            onClick={this.delete.bind(this,mucluc.id)}>
                                <span className="fa fa-trash mr-5"></span>Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>        
        )
    }
}

export default ListLoai