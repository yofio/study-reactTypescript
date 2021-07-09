/* eslint-disable @typescript-eslint/no-unused-vars */

/** typeScriptの基本の型 */

//boolean
let bool: boolean = true;

let num: number = 11;

let str: string = "aaaa";

let arr: Array<number> = [0, 1, 2];

let arr2: number[] = [0, 1, 2];

// tuple型はほとんど使わない
let tuple: [number, string] = [0, "aa"];

//any
let any1: any = false;

// voidは返却する値がない時に使う
let funcA = (): void => {
  const tesy = "TEST";
};

let null1: null = null;

let undefind1: undefined = undefined;

// objectはあまり使われない
let object1: object = {};
// objectのこの記法は用いられる
let object2: { id: number; name: string } = { id: 1, name: "aaaaa" };
