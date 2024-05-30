import { defineFunction } from "@aws-amplify/backend";

export const getclubinfo= defineFunction({
    name: 'getclubinfo',
    entry: './getclubinfo.ts'
})