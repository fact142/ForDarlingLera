import React from "react";
 
class AppView extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {newItem: ""};
         
        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onInputChange(e){
        this.setState({newItem:e.target.value});
    }
    onClick(e){
        if(this.state.newItem){
            this.props.onAddItem(this.state.newItem);
            this.setState({newItem:" "});
        }
    }
    render(){
        let change = this.props.onChangeItem;
        let remove = this.props.onRemoveItem;
        return <div> 
                <input type="text" value={this.state.newItem} onChange={this.onInputChange} />    
                <button onClick={this.onClick}>Добавить</button>                
                <h2>Список смартфонов</h2>
                <div>
                    {
                        this.props.phones.map(function(item){
                             
                            return <Phone key={item} text={item} onRemove={remove} onChange={change}/> 
                        })
                    }
                </div>
            </div>;
    }
}
 
class Phone extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            text: props.text, 
            isEdit: false,
            changedText: ""};
        this.onClick = this.onClick.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }
    edit(e) {
        this.setState(state => ({
            isEdit: !state.isEdit,
          }));
        if(this.state.isEdit){
            this.props.onChange(this.state.changedText, this.state.text);
            this.setState({changeText: ""});
        }
    }
    save(e) {
        this.setState({changedText:e.target.value});
    }
    onClick(e){
        this.props.onRemove(this.state.text);
    }
    rendNorm(){
        return <div> 
                <p>
                    <b>{this.state.text}</b><br />
                    <button onClick={this.onClick}>Удалить</button> 
                    <button onClick={this.edit}>Изменить</button> 
                </p>
            </div>;
    }
    renEdit(){
        return <div> 
                <p>
                    <input value={this.state.ChangeText} onChange={this.save}></input>
                    <button onClick={this.edit}>Сохранить</button> 
                </p>
            </div>;
    }
    render(){

        if (this.state.isEdit){
            return this.renEdit();   
        } else {
            return this.rendNorm();
        }
    }
}
export default AppView;