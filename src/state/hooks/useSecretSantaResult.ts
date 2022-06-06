import { useRecoilValue } from "recoil";
import { secretSantaResult } from "../atom";

export const useSecretSantaResult = () => {
    return useRecoilValue(secretSantaResult);
};