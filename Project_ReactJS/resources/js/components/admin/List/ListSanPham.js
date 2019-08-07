import React, {Component} from 'react';

class ListSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
    }
    edit(item){
        this.props.onEdit(item);
    }
    delete(id){
        fetch('/api/sanpham/delete/'+id, {
         })
         this.props.onDel();
         //console.log(id, '')
     }
    render() {
        let sanpham = this.props.sanpham;
        //console.log(sanpham);
        return (
            <tbody>
                <tr>
                    <td>{ sanpham.id }</td>
                    <td>{ sanpham.name }</td>
                    <td style={{ color: 'red' }}>{ sanpham.price }$</td>
                    <td>
                    <img src={sanpham.images} width="50px"/>
                    </td>
                    <td>{sanpham.content}</td>
                    <td>{sanpham.id_catalog===1 ? 'Điện thoại' : 'Máy tính'}</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning"
                         onClick={this.edit.bind(this,sanpham)}
                        >
                            <span className="fa fa-pencil mr-5">
                            </span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger"
                         onClick={this.delete.bind(this,sanpham.id)}
                        >
                            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default ListSanPham