import axios from "axios";
import Swal from "sweetalert2";
import { showErrorResquest } from "../../helpers/showErrorRequest";
import { syncFinishLoadingModal, syncStartLoadingModal } from "../actions/uiActions";
import { types } from "../types/types";
const baseUrl = process.env.REACT_APP_API_URL;
// this token is used only in practice 
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDAzMWIxYzJlMTZlMDEyZDRhNjljNmQiLCJuYW1lIjoiRGFodWNhciIsImlhdCI6MTYxMTQ1NjEwMSwiZXhwIjoxNjExNDYzMzAxfQ.7J4v-6H-eU_iHbStrzpzTHhCdsXsxh1KdeQaipHzNUw';

// add new skill item to de backend
export const asyncAddSkill = ( values ) => {
    return async ( dispatch ) => {
        // show load spinner in the modal 
        dispatch( syncStartLoadingModal() );
        const { skillName, skillExperience } = values;
        try {
            let { data } = await axios.post(baseUrl+'add-skill',{ 
                skillName, 
                skillExperience 
            } , {
                headers: {
                    'Content-type': 'application/json',
                    'x-token': token
                }
            });
            if( data.ok ){
                Swal.fire('Skill saved!', data.msg, 'success');
                // hide load spinner in the modal
                dispatch( syncFinishLoadingModal() );
            }
        } catch (error) {
            const data = error.response.data.errors;
            const dataMsg = Object.values(data);
            showErrorResquest( dataMsg ); 
        }
    }
}

// load all skill items for user logged
export const asyncLoadSkills = () => {
    return async ( dispatch ) => {
        // show load spinner in the skill screen while data is loading
        try {
            let { data } = await axios.get(baseUrl+'show-all-skills', {
                headers: {
                    'Content-type': 'application/json',
                    'x-token': token
                }
            });
            if( data.ok ){
                // hide load spinner if request is success
                const skills = data.skills;
                dispatch( syncSetAllSkillItems( skills ) );
                // dispatch( syncFinishLoadingPage() );
            }
        } catch (error) {
            const { msg } = error.response.data;
            Swal.fire('Session error!', msg, 'error');
        }
    }
}

// set skills list in the store 
const syncSetAllSkillItems = ( skillItemList ) => ({
    type: types.skillLoadItems,
    payload: skillItemList
})

// set isLoading property to true for show loading spinner
// const syncStartLoadingPage = () => ({
//     type: types.skillStartLoadingPage
// })

// set isLoading property to false for hide loading spinner
// const syncFinishLoadingPage = () => ({
//     type: types.skillFinishLoadingPage
// })
