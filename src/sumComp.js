import './sumComp.css';

let Summary = (props) => {
    return (
        <div className='sum__container'>
            {/* First summary info */}
            <div className='sum__container-info'>
                <div className='sum__container-info-text'>
                    <p>Tip Amount</p>
                    <span>/ person</span>
                </div>
                <h1>{props.tipToPay}</h1>
            </div>
            {/* Second summary info */}
            <div className='sum__container-info'>
                <div className='sum__container-info-text'>
                    <p>Total</p>
                    <span>/ person</span>
                </div>
                <h1>{props.amountToPay}</h1>
            </div>
        </div>
    );
}

export default Summary;
