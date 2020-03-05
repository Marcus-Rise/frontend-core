import {IDictionary} from "@/models/IDictionary";

export type TypedDictionaryType<S, T extends IDictionary<S>> = {
    [K in keyof T]: T[K];
};
