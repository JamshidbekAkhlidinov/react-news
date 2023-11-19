import CardList from "./card-list/card-list";

function Main({data}) {
    return (
        <main>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <CardList data={data}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main