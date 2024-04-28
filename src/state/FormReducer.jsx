import Form from "../pages/form/Form";
import { useReducer } from "react";

const FormReducer = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    date: "",
    pinCode: "",
    email: "",
    phone: "",
    file: "",
  };

  const [state, dispatch] = useReducer(reducer, initialValues);

//   function reducer(state, action) {

//     switch(action.type){
//         case 'firstName':
//             return { ...state, firstName : action.payload}
//         case 'lastName':
//             return { ...state, lastName : action.payload}
//         case 'date':
//             return { ...state, date : action.payload}
//         case 'pinCode':
//             return { ...state, pinCode : action.payload}
//         case 'email':
//             return { ...state, email : action.payload}
//         case 'phone':
//             return { ...state, phone : action.payload}
//         case 'file':
//             return { ...state, file : action.payload}
//         default:
//             throw new Error("Invalid action type")

//     }

//   }


function reducer (state, {type , payload}){
    switch(type){
        case 'textInput':
            return { ...state, [payload.key] : payload.value}
        default:
            throw new Error("Invalid action type")
    }
}
  return <Form dispatch={dispatch} state={state} />;
};

export default FormReducer;
