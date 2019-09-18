import React,{Component} from "react";

// Data
import authors from "./data";


// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {

state = {
  currentAuthor: null
}
selectAuthor = author => {
  this.setState({
    currentAuthor: author
  })
}
// filterAuthors = query => {
//   const search = authors.filter(author.first_name.includes(query.toLowerCase()))
// }

showDetail = () => {
  if (this.state.currentAuthor){
    return <AuthorDetail author={this.state.currentAuthor}/>
  }
  else {
    return <AuthorsList authors={authors} selectAuthor = {this.selectAuthor} />
  }

  }

 render () {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar selectAuthor = {this.selectAuthor} />
        </div>
        <div className="content col-10">
        {this.showDetail()}
        </div>
      </div>
    </div>
  )
 };
}

export default App;
