import Span from "./Span";

const Display = ({time}) => {

    return (
        <div>
            <Span time={time}/>
            <Span time={time}/>
            <Span time={time}/>
        </div>
    );
};

export default Display;