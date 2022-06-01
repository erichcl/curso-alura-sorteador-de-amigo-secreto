import { useSetRecoilState } from "recoil";
import { secretSantaResult } from "../atom";
import { makeNameDrawal } from "../helpers/makeNameDrawal";
import { useParticipantList } from "./useParticipantList";

export const useNameDrawal = () => {
    const participants = useParticipantList();
    const setResult = useSetRecoilState(secretSantaResult);
    return () => {
        setResult(makeNameDrawal(participants)) 
    };
    
    };