
function W_Choose(props) {
  return (
    <div className="creative_cnt">
      <div className="box_icon">
        <div className="icon_box yellow">
          <img src={props.img}></img>
        </div>
        <div className="intro_desc">
          <h4>{props.title}</h4>
          <p>{props.info}</p>
        </div>
      </div>
    </div>
  );
}
export default W_Choose;
