import React from 'react';

export default class SubReddit extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.favourite = this.favourite.bind(this);
    }
        
    handleSubmit() {
        const subRed = document.getElementById('sub').value
        var url = 'https://www.reddit.com/r/' + subRed + '/hot.json?limit=10'
        fetch(url)
        .then(function(res) {
            return res.json();   // Convert the data into JSON
        })
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result.data.children
            });          
        })
        .catch(
            (err) => {
            console.log(err);   // Log error if any
        });
    }
      
    componentDidMount() {
        this.SubReddit();
    }

    SubReddit() {
        this.setState({
            isLoaded: true
        });  
    }

    favourite(id) {
        console.log("This was favourited: " + id)   
        var data = JSON.parse(localStorage.getItem('favourites'))
        if (data != null) {
            data.push(id)
        } else {
            data = [id]
        }
        localStorage.setItem('favourites', JSON.stringify(data))
        window.location.reload();
    }
  
    render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
      return (
      <div>
        <div className="App">
        <header className="App-header">
        <label htmlFor="id"> Subreddit: 
            <input id="sub" name="sub" type="text" className="form-control" />
            <button className="btn btn-primary" type='submit' onClick={this.handleSubmit}> Get </button>
        </label>    
        </header>
        </div>
        <h1>Sub-Reddits</h1>
        <ul id="sublist">
          { items.map(item => (
            <li key={item.data.id} id={item.data.id}>
                    <a id={item.data.id + "title"} className="title" href={item.data.url}> {item.data.title} </a>
                    <div id={item.data.id + "author"}className="author"> {item.data.author} </div>
                    <div id={item.data.id + "content"}className="content"> {item.data.self_text} </div>
                    <button className="btn btn-primary" type='button' onClick={() => this.favourite(item.data.id)}> Favourite </button>
            </li>
          ))}
        </ul>
        </div>
      );
    
    }
  }
}