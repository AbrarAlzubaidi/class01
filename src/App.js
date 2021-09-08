import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './component/data.json';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';
import Form from './component/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      title: '',
      description: '',
      array:[]
    }
  }
  shown = (title, description) => {
    this.setState({
      showModal: true,
      title: title,
      description: description,
    })
  }

  hidden = () => {
    this.setState({
      showModal: false

    })
  }

  select=(event)=>{
    // event.preventDefault();
    let selectValue= event.target.value;
    let array = data.filter( index=>{
      if(index.horns === selectValue)
      {
        return array
      }
     }) 
      // this.setState({
      //   ...this.state,
      //   select:array
      // })
    
  }

  render() {
    return (
      <>
        <Header />
        <br/>
        <Form select={this.select}/ >

        {
          data.map((currentValue) => {
            return <Main title={currentValue.title}
              image_url={currentValue.image_url}
              description={currentValue.description}
              keyword={currentValue.keyword}
              shown={this.shown}
            />
          })
        }
        <SelectedBeast hidden={this.hidden}
          title={this.state.title}
          description={this.state.description}
          showModal={this.state.showModal}
        />
        <Footer />
      </>
    )
  }
}
export default App




