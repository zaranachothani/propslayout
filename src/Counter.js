import "./App.css";

function Counter(props) {
  return (
    <>
      <div className="cnt1">
        <div className="cnt">
          <img src={props.img}></img>
        </div>
        <div className="cnt_content">
          <h3 className="cnt_text">
            <span>{props.num}</span>
            <p>{props.text}</p>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Counter;
