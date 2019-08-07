import React, {Component} from 'react';
class ThemSanPham extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            id : '',
            name :'',
            price : '',
            mota : '',
            catalog : 1,
            images : '',
        }
        
        this.CloseForm = this.CloseForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.XoaTrang = this.XoaTrang.bind(this);
    }
    componentWillMount(){
        var item = this.props.Editing ? this.props.Editing : {id:'',name:""};
        //console.log('this Will Mount',item);
        this.setState({
            id : item.id,
            name : item.name,
            price : item.price,
            mota : item.content,
            catalog : item.catalog,
            images : item.images,
        })
    }
    componentWillReceiveProps(NextProps){
        if(NextProps && NextProps.Editing){
            this.setState({
                id : NextProps.Editing.id,
                name : NextProps.Editing.name,
                price : NextProps.Editing.price,
                mota : NextProps.Editing.content,
                catalog : NextProps.Editing.catalog,
                images : NextProps.Editing.images,
            });
        }
    }
    CloseForm(){
        this.props.closeForm();
    }
    onChange(event){
        var target = event.target;
        var ten = target.name;
        var value = target.value;
        this.setState({
            [ten] : value
        });
        console.log(value)
    }
    XoaTrang(){
        this.setState({
            id :'',
            name : '',
            price : '',
            mota : '',
            catalog : 1,
            images : '',
        });
    }
    onSubmit(){
        
        event.preventDefault();
        event.preventDefault();
        var name =  this.state.name;
        var price = this.state.price;
        var mota = this.state.mota;
        var catalog = this.state.catalog;
        var images = this.state.images;
        var id = this.props.Editing.id;
        //TH thêm
        //console.log(name,price,mota,catalog,images)
        if(id){
            //console.log('sua', '')
            fetch('/api/sanpham/editSP/'+id,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id:id,
                    name: name,
                    price : price,
                    mota : mota ,
                    catalog:catalog,
                    images : images,
                }),
            }).then((response) => response.json())
            this.props.LoadData();
        }
        else{
            fetch('/api/sanpham/themSP', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    price : price,
                    mota : mota ,
                    catalog:catalog,
                    images : images,
                }),
            })
          
        }
        this.props.closeForm();
        this.props.LoadData();
    }
    render() {
        console.log(this.props.Editing)
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                        {this.props.Editing.id ? 'Cập nhật sản phẩm ':'Thêm mới'}</h3>
                        <button onClick={this.CloseForm}>Đóng</button>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control"
                                name="name"
                                onChange={this.onChange}
                                value = {this.state.name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá :</label>
                                <input type="text" className="form-control"
                                name = "price"
                                onChange={this.onChange}
                               value = {this.state.price}
                                />  
                            </div>
                            <div className="form-group">
                                <label>Danh mục :</label>
                                <select className="form-control" name="catalog" 
                                onChange={this.onChange}
                                value={this.state.catalog}>
                                    <option value={1}>Điện thoại</option>
                                    <option value={2}>Máy tính</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Mô tả :</label>
                                <input type="text" className="form-control" 
                                 name = "mota"
                                 onChange={this.onChange}
                                 value = {this.state.mota}
                                />
                            </div>
                            <div className="form-group">
                            <label>Hình ảnh :</label>
                            <p>
                            {this.props.Editing.id ?  <img src={this.state.images} width="100px"/>:''}
                            </p>
                                <input type="file" className="form-control" 
                                name = "images"
                                onChange={this.onChange}
                                />
                            </div>
                           
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Lưu</button>&nbsp;
                                <button type="submit" className="btn btn-danger"
                                onClick = {this.XoaTrang}
                                >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThemSanPham