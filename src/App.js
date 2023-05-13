import React, {Component} from 'react';
import {BrowserRouter as Router, Routes ,Route, Navigate} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import OurTeam from "./Components/OurTeam";
import PostPreview from "./Components/PostPreview";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       auth: false,
       posts: null,
    }
  };
  authHandler = (auth) => {
    this.setState({auth: !this.state.auth})
  };
  deleteHandler = (id) => {
    axios.delete('/posts/'+ id)
    .then((r) => {console.log(r)})
    .catch((err) => {console.log(err)})
  };
  componentDidMount(){
    axios.get('/posts')
    .then((response) => {
      this.setState({posts: response.data});
    })
    .catch((error) => {
      console.log(error);
  })
};
  render() {
    let posts;
    if(this.state.posts != null) {
      const tenposts = this.state.posts.splice(1,10);
      posts = tenposts.map(post => {
        return <PostPreview 
        delete={()=>this.deleteHandler(post.id)}
        key={post.id} title={post.title} body={post.body}/>
      })
    };
  return (
    <Router>
      <Nav login={this.authHandler} status={this.state.auth}/>
      <Routes>
        <Route exact path="/contact" element={<ContactUs password="Password"/>}/>
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/team" element={<OurTeam />}/>  
        <Route exact path="/services" element={this.state.auth === false ?(<Navigate replace to={"/"}/>) : (<Services>{posts}</Services>)}/>
        <Route exact path="*" element={<Home eror="404 page not found"/>}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
};
}

export default App;
