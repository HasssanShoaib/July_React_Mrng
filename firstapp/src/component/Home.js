import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsList from './NewsList';

class Home extends Component {

    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(userInput){
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1)
        })

        this.setState({filtered:output})
    }

    render(){
        console.log(this.state.news)
        return (
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer year="2020" month="July"/>
            </React.Fragment>
        )
    }
}

export default Home;
