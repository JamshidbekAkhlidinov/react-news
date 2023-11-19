import Card from "../card/card";

function CardList({data}) {
    return (
        data.map((item, index)=>(
            <Card item={item} index={index}/>
        ))
    )
}

export default CardList