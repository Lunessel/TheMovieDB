import {useDispatch} from "react-redux";

import {ChangeTerm} from "../../store";
import "./form.css"

const Form = () => {
    const dispatch = useDispatch();
    const searchHandler = (e) => {
        dispatch(ChangeTerm(e.target.value));
        // console.log(e.target.value);
        
    }

    return (
        <div>
            <form>
                <input type="text" name={"searchinput"} onChange={searchHandler}/>
            </form>
        </div>
    );
};

export default Form;