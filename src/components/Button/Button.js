import './button.css';

const Button = ({text, onClick, ...props}) => {
    return (
        <>
            {/* {props.preventLoad()} */}
            <button className='button' type = {props.type} onClick={(event) => {
                event.preventDefault();
                console.log(event);
                onClick();
                
                }}>{text}</button>

        </>

    )
}

export default Button;