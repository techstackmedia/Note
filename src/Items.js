const Item = (props) => {
    return (
      <div>
        <h1>{props.comments}</h1>
        <h2>{props.posts}</h2>
        <h2>{props.profiles}</h2>
      </div>
    );
  };
  
  export default Item;