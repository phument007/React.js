interface items{
    name:string;
    isPacked: boolean;
}
function Item(props:items){
    const {name, isPacked} = props;
    if(isPacked){
         return <li>{name}✅</li>
    }
    return <li>{name}</li>
}

export default Item;