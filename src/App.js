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
      image_url:'',
      data:data,
      numberOfHorns:[]
    }
  }
  shown = (title, description,image_url) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
      
    })
  }

  hidden = () => {
    this.setState({
      showModal: false

    })
  }

  select=(event)=>{
    event.preventDefault();
    let selectedValue=parseInt(event.target.value);
    console.log(selectedValue);
    let numberOfHorns= [];
    numberOfHorns=data.filter(index=>{
    return (index.horns=== selectedValue)
    
    })
    this.setState({
      data:numberOfHorns
    })
    
  }

  render() {
    return (
      <>
        <Header />
        <br/>
        <Form select={this.select} / >

        {
          this.state.data.map((currentValue) => {
            return <Main title={currentValue.title}
              image_url={currentValue.image_url}
              description={currentValue.description}
              keyword={currentValue.keyword}
              horns={currentValue.horns}
              shown={this.shown}
            />
          })
        }
        <SelectedBeast hidden={this.hidden}
          title={this.state.title}
          description={this.state.description}
          image_url={this.state.image_url}
          showModal={this.state.showModal}
        />
        <Footer />
      </>
    )
  }
}
export default App




