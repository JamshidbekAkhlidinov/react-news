import CardList from "./card-list/card-list";
import {Component} from "react";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'test',
        }
    }

    changeHandlerInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {data} = this.props
        const {title} = this.state
        return (<main>
            <div className="album py-5 bg-light">
                <div className="container">
                    <form>
                        <div>
                            <label>
                                Title:
                                <input type="text" value={title} name="title" onChange={this.changeHandlerInput}/>
                            </label>
                            <input type="button" value="Salqash"/>
                        </div>
                    </form>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <CardList data={data}/>
                    </div>
                </div>
            </div>
        </main>)
    }
}

export default Main