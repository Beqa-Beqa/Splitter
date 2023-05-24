import './styledInput.css';

let StyledInput = (props) => {
    let styl;
    // Check if the bill or people value is zero
    if(parseInt(props.bill) === 0 || parseInt(props.people) === 0) {
        styl = "input__container--zero";
    } else {
        styl = "input__container";
    }
    return(
        <div className={styl}>
            <label htmlFor={props.cId}>
                <img src={props.image} alt="icon"/>
            </label>
            <div className='input__container-input'>
                {props.inp}
            </div>
        </div>
    );
}

export default StyledInput;