/*
* FILE : Subreddit.js
* PROJECT : Frontend- AWF
* PROGRAMMER : Dania Weiler
* FIRST VERSION : 2021-03-06
* DESCRIPTION : Handle the subreddit component 
*/

import React from 'react';

export default class SubReddit extends React.Component {
    
    //
    // FUNCTION : constructor
    // DESCRIPTION : class contrustor for subreddit component
    // PARAMETERS : props
    // RETURNS : none
    // 
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.favourite = this.favourite.bind(this);
    }
        
    //
    // FUNCTION : handleSubmit
    // DESCRIPTION : Get the value from the input and search
    // PARAMETERS : none
    // RETURNS : none
    //
    handleSubmit() {
        var subRed = document.getElementById('sub').value
        this.doSubmit(subRed);
    }

    //
    // FUNCTION : doSubmit
    // DESCRIPTION : Retrieve posts from reddit
    // PARAMETERS : subred - the search value
    // RETURNS : none
    //
    doSubmit(subRed) {
        var subReddit;
        if (subRed === undefined || subRed === "") {
            subReddit = localStorage.getItem('search');
        } else {
            subReddit = subRed
        }

        if (subReddit === undefined || 
            subReddit === null || 
            subReddit === "undefined" || 
            subReddit === "null") {
            // !== not working properly
            }
            else {
        var url = 'https://www.reddit.com/r/' + subReddit + '/hot.json?limit=10'
        
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
            
            localStorage.setItem('search', subReddit)         
        })
        .catch(
            (err) => {
            console.log(err);   // Log error if any
        });
    }
}

    //
    // FUNCTION : componentDidMount
    // DESCRIPTION : mount actions to set state and form
    // PARAMETERS : none
    // RETURNS : none
    //      
    componentDidMount() {
        this.SubReddit();
        this.doSubmit();
    }

    //
    // FUNCTION : SubReddit
    // DESCRIPTION : set loading state
    // PARAMETERS : none
    // RETURNS : none
    //
    SubReddit() {
        this.setState({
            isLoaded: true
        });  
    }

    //
    // FUNCTION : favourite
    // DESCRIPTION : do actions to favourite a post
    // PARAMETERS : id - id to favourite
    // RETURNS : none
    //
    favourite(id) { 
        var data = JSON.parse(localStorage.getItem('favourites'))
        if (data != null) {
            data.push(id)
        } else {
            //Only save if its not there already
            var index = 0;
            if (data !== null) {
                index = data.indexOf(id);
            } 
            if (index !== -1) data = [id]
        }
        localStorage.setItem('favourites', JSON.stringify(data))
        window.location.reload();
    }
  
    //
    // FUNCTION : render
    // DESCRIPTION : get the html to render
    // PARAMETERS : none
    // RETURNS : none
    //
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