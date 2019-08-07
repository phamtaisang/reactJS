import React, {Component} from 'react';
import ListSanPham from './List/ListSanPham';
import Search from './Search/Search'
import ThemSanPham from './Add/ThemSanPham';
class LoaiSanPham extends Component {
    constructor(props){
        super(props);
        this.state = {
            sanpham : [],
            goiFormThem : false,
            Editing : [],
            search : '',
        }
        this.ToggleForm = this.ToggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.LoadData = this.LoadData.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.Search = this.Search.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData () {
        fetch('/api/sanpham')
        .then(response => response.json())
        .then(sanpham => this.setState({ sanpham }));
    }
    ToggleForm(){
        this.setState({
            goiFormThem :true,
        });
    }
    closeForm(){
     this.setState({
        goiFormThem : false,
        Editing:''
     });
    }
    onEdit(item){
        this.setState({
            Editing : item,
            goiFormThem:true
        });
    }
    LoadData(){
        this.fetchData();
    }
    Search(txt){
        //console.log('heheh',txt);
        this.setState({
            search : txt,
        });
    }
    render() {
       //console.log(this.state.search, '')
       let filteredProduct = this.state.sanpham.filter(
        (item) =>{
         return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    )
       //console.log(filteredProduct)
       
        let motSanPham = filteredProduct.map((item,i)=>{
            return <ListSanPham onDel = {this.LoadData} key={item.id} index={i}
            sanpham = {item}
            onEdit = {this.onEdit}
            />
         });
         let isform = this.state.goiFormThem;
         let elmform = isform ? <ThemSanPham 
         closeForm = {this.closeForm}
         LoadData = {this.LoadData}
         Editing = {this.state.Editing}
         />:'';
        return (
        <div>
        <div className="text-center">
            <h1>SẢN PHẨM</h1>
            <hr/>
        </div>
        <div className="row">
             {elmform}  
            <div className={isform ?'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            {isform?'' : <button type="button" className="btn btn-primary" onClick={this.ToggleForm}>
                <span className="fa fa-plus mr-5"></span>Thêm Sản Phẩm
            </button>}
                <Search Search = {this.Search}/>
                <div className="row mb-2">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Giá</th>
                                    <th className="text-center">Hình Ảnh</th>
                                    <th className="text-center">Mô Tả</th>
                                    <th className="text-center">Danh mục</th>
                                    <th className="text-center">Trạng Thái</th>
                                </tr>
                            </thead>
                                {motSanPham}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default LoaiSanPham