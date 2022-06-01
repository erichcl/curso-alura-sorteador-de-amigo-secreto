import shuffle from "just-shuffle";

export const makeNameDrawal = (participants: string[]) => {
        const shuffledList = shuffle(participants);
        const result = new Map<string, string>();
        for(let i = 0; i < participants.length; i++) {
            const mySecretFriend = i === (participants.length -1) ? 0 : i + 1;
            result.set(shuffledList[i], shuffledList[mySecretFriend]);
        }
        return result;
}