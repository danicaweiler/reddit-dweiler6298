/*
* FILE : Favourite.js
* PROJECT : Frontend- AWF
* PROGRAMMER : Dania Weiler
* FIRST VERSION : 2021-03-06
* DESCRIPTION : Handle the favourite component 
*/

import React from 'react';

export default class Favourites extends React.Component {
    //
    // FUNCTION : constructor
    // DESCRIPTION :construct the Favourites component
    // PARAMETERS : props
    // RETURNS : none
    //
    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this);
        this.state = { items: [] }
    }

    //
    // FUNCTION : componentDidMount
    // DESCRIPTION : handle inital state render
    // PARAMETERS : none
    // RETURNS : none
    //
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('favourites'))
        if (data != null) {
            data.forEach(element => {
                var url = 'https://www.reddit.com/comments/' + element + '.json';
                fetch(url)
                    .then(function (res) {
                        return res.json();   // Convert the data into JSON
                    })
                    .then(
                        (result) => {
                            var { items } = this.state;
                            items.push(result[0].data)
                            this.setState({
                                isLoaded: true,
                                items: items
                            });
                        })
                    .catch(
                        (err) => {
                            console.log(err);   // Log error if any
                        });

            });
        }
    }

    //
    // FUNCTION : Favourites
    // DESCRIPTION : Placeholder so itll build
    // PARAMETERS : none
    // RETURNS : none
    //
    Favourites() {
    }

    //
    // FUNCTION : Render
    // DESCRIPTION : handle getting what to render
    // PARAMETERS : none
    // RETURNS : none
    //
    render() {
        const { items } = this.state;
        if (items != null && items.length > 0) {
            return this.WithFavourites(items);
        }
        return this.NoFavourites();
    }

    //
    // FUNCTION : NoFavourites
    // DESCRIPTION : html for no favourites
    // PARAMETERS : none
    // RETURNS : none
    //
    NoFavourites() {
        return (
            <div key="emptyFav"><h1>Favourites</h1><p>None</p></div>
        );
    }

    //
    // FUNCTION : WitFavourites
    // DESCRIPTION : html for with favourites
    // PARAMETERS : none
    // RETURNS : none
    //
    WithFavourites(props) {
        const { items } = this.state;
        return (<div key="hasFavs"><h1>Favourites</h1>
            <ul key="favs">
                {items.map(item => (
                    <li key={item.children[0].data.id} id={item.children[0].data.id}>
                        <a id={item.children[0].data.id + "Ftitle"} className="title" href={item.children[0].data.url}> {item.children[0].data.title} </a>
                        <div id={item.children[0].data.id + "Fauthor"} className="author"> {item.children[0].data.author} </div>
                        <div id={item.children[0].data.id + "Fcontent"} className="content"> {item.children[0].data.self_text} </div>
                        <button className="btn btn-primary" type='button' onClick={() => this.remove(item.children[0].data.id)}> Remove </button>
                    </li>
                ))}
            </ul>
        </div>
        );
    }

    //
    // FUNCTION : remove
    // DESCRIPTION : remove item from favourite
    // PARAMETERS : item - id
    // RETURNS : none
    //
    remove(item) {
        console.log("Remove: " + item)
        var data = JSON.parse(localStorage.getItem('favourites'))
        if (data != null) {
            const index = data.indexOf(item);
            if (index > -1) {
                data.splice(index, 1);
            }

        localStorage.setItem('favourites', JSON.stringify(data))
        window.location.reload();
        }
    }
}