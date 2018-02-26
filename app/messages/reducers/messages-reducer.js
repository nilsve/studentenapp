import { 
    NEW_MESSAGE,
} from "../constants";

const initialState = { 
    messages: [
        {
            "user": "nils",
            "message": "Dit is een test"
        },
        {
            "user": "nils",
            "message": "Dit is nog een test"
        },
        {
            "user": "nils",
            "message": "bablablal"
        },
        {
            "user": "nils",
            "message": "Dit is een test"
        },
        {
            "user": "nils",
            "message": "Dit is nog een test"
        },
        {
            "user": "nils",
            "message": "bablablal"
        },
        {
            "user": "nils",
            "message": "Dit is een test"
        },
        {
            "user": "nils",
            "message": "Dit is nog een test"
        },
        {
            "user": "nils",
            "message": "bablablal"
        },
    ],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message,
                ],
            };
        default:
            return state;
    }
};