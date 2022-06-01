import React from "react";
import { makeNameDrawal } from "./makeNameDrawal";

describe("Make the names drawal for secret santa", () => {
    it("can't get own name", () => {
        const participants = ["Alice", "Bob", "Charlie", 'Devon', 'Eve'];
        const drawal = makeNameDrawal(participants);
        drawal.forEach((element: string) => {
            const secretFriendsName = drawal.get(element);
            expect(secretFriendsName).not.toEqual(element);
        });
    });
});