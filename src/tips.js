import './tips.css';

let Tip = (props) => {
    let styl;
    // Check if the current tip value matches the selected tip value
    props.tip == props.num ? styl = "button-style-chosen" : styl = "button-style";
    return (
        <input
            type="button" value={props.value}
            num={props.num} className={styl}
            onClick={props.onClick} number={props.num}
         />
    );
}

export default Tip;
