import {StateMachine} from "@/models/StateMachine";

describe("StateMachine", () => {
    let model: StateMachine;

    test("constructor", () => {
        model = new StateMachine("awd", {
            awd: ["wwww"],
            www: ["awd"],
        });

        expect(model.state).toEqual("awd");
    });

    describe("transition", () => {
        test("without method", () => {
            model = new StateMachine("idle", {
                idle: ["loading"],
                loading: ["idle", "error"],
                error: ["loading"]
            });

            expect(model.transition("awda")).toEqual("idle");
            expect(model.transition("loading")).toEqual("loading");
            expect(model.transition("awda")).toEqual("loading");
        });

        test("with method without params", () => {
            let methodInited = false;

            model = new StateMachine("idle", {
                idle: ["loading"],
                loading: ["idle", "error"],
                error: ["loading"]
            });

            expect(methodInited).toBeFalsy();

            expect(model.transition(
                "awda",
                () => methodInited = true
            )).toEqual("idle");
            expect(methodInited).toBeFalsy();

            expect(model.transition(
                "loading",
                () => methodInited = true,
            )).toEqual("loading");
            expect(methodInited).toBeTruthy();
        });

        test("with method with params", () => {
            let methodInited = false;

            model = new StateMachine("idle", {
                idle: ["loading"],
                loading: ["idle", "error"],
                error: ["loading"]
            });

            expect(methodInited).toBeFalsy();

            expect(model.transition(
                "awda",
                (val: boolean) => methodInited = val,
                true,
            )).toEqual("idle");
            expect(methodInited).toBeFalsy();

            expect(model.transition(
                "loading",
                (val: boolean) => methodInited = val,
                true,
            )).toEqual("loading");
            expect(methodInited).toBeTruthy();

            expect(model.transition(
                "loading",
                (val: boolean) => methodInited = val,
                false,
            )).toEqual("loading");
            expect(methodInited).toBeTruthy();

            expect(model.transition(
                "idle",
                (val: boolean) => methodInited = val,
                false,
            )).toEqual("idle");
            expect(methodInited).toBeFalsy();
        });
    })
});
