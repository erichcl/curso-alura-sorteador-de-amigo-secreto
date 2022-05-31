import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export const useErrorMessage = () => {
    const errorMessage = useRecoilValue(errorState);
    return errorMessage;
}