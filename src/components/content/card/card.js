function Card({item, index}) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={item.photo} alt="photo"/>
                <div className="card-body">
                    <p className="card-title">
                        {item.title}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className={`btn btn-sm btn-outline-success  ${(index % 2 === 0) && 'active'}`}
                            >
                                View
                            </button>
                            <button
                                type="button"
                                className={`btn btn-sm btn-outline-info ${index % 2 === 1 && 'active'}`}>
                                Edit
                            </button>
                        </div>
                        <small className="text-muted">{index + 20} mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card