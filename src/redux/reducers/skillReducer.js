import axios from "axios";
import { syncFinishLoadingModal, syncStartLoadingModal } from "../actions/uiActions";
const URL = 'http://localhost:4800/api/dahucar';

// add new skill item to de backend
export const asyncAddSkill = ( values ) => {
    return async ( dispatch ) => {
        console.log('THIS IS ADD SKILL ACTION');
        dispatch( syncStartLoadingModal() );
        try {
            dispatch( syncFinishLoadingModal() );
            let idResume = 1;
            axios.post(`${URL}/add-skill/${idResume}`, {
                data: JSON.stringify(values)
            })
        } catch (error) {
            console.log(error);
        }
    }
}
