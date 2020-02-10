import React from 'react';
import Card from "../components/Card/Card";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        };
        console.log("hello");
    }
    async componentDidMount() {
        const movies = await fetch('../assets/data.json');
        const moviesJSON = await movies.json();
        console.log(moviesJSON);

        if (moviesJSON) {
            this.setState({
                data: moviesJSON,
                loading: false
            })
        }
    }
    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>
        }
        return (
            data.map(movie => <Card key={movie.id} movie={movie} />)
        );
    }
}

export default List;
