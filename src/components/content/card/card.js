import {Component} from "react";

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {like: false, title: "TEST title"}
        this.onLike = this.onLike.bind(this)
    }

    // onLike() {
    //     this.setState(prevState => ({
    //         like: !prevState.like
    //     }))
    // }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    onChange = (e, title) => {
        this.setState({
            title: e.target.value,
        })
    }

    render() {

        const {item, index} = this.props
        const {like, title} = this.state

        return (
            <div className="col">
                <div className={`card shadow-sm ${!like && ' bg-dark'}`}>
                    <img src={item.photo} alt="photo"/>
                    <div className="card-body">
                        <p className="card-title">
                            {title}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className={`btn btn-sm btn-outline-success  ${(index % 2 === 0) && 'active'}`}
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-sm btn-outline-info ${index % 2 === 1 && 'active'}`}>
                                    <i className="fas fa-edit"></i>
                                </button>

                                <button
                                    type="button"
                                    onClick={this.onLike}
                                    className={`btn btn-sm btn-outline-info ${like && 'active'}`}>
                                    <i className="fas fa-heart"></i>
                                </button>

                                <input type="text" onChange={e => this.onChange(e, "JK")} className="form-control"/>

                            </div>
                            {/*<small className="text-muted">{index + 20}</small>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Card