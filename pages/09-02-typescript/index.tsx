// JSX를 return하는 컴포넌트 : tsx
// 자바스크립트만 사용하는 컴포넌트 : ts

export default function () {
  /* 타입 추론 */
  let a = "text";
  // a = 3; // Type 'number' is not assignable to type 'string'.

  /* 타입 명시 */
  let b: string = "text";
  // b = 3; // Type 'number' is not assignable to type 'string'.

  /* 문자 타입(선언과 할당 분리) */
  let c: string;
  c = "text";

  /* 숫자 타입 */
  let d: number = 10;
  // d = "text"; // Type 'string' is not assignable to type 'number'.

  /* 불린 타입 */
  let e: boolean = true;
  e = false;
  // e = "false"; // = true // Type 'string' is not assignable to type 'boolean'.

  /* 배열 타입 */
  let f: number[] = [1, 2, 3, 4, 5];
  let g: string[] = ["a", "b", "c"];
  let h1 = ["a", "b", "c", 10];
  // 배열에 문자열과 숫자열을 같이 넣어두고 싶을 때
  let h2: (string | number)[] = ["a", "b", "c", 10];

  /* 객체 타입 */
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hoddy?: string;
  }
  const profile: IProfile = {
    name: "이름",
    age: 26,
    school: "학교",
  };
  profile.age = "26살";
  profile.hoddy = "취미";

  /* 함수 타입(타입 추론 X, 반드시 타입 명시 필요) + 리턴 타입 명시 가능 */
  const add = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  const result = add(1000, 2000, "원");

  /* any 타입 => 자바스크립트 */
  let i: any = "text";
  i = 123;
  i = true;

  return <div>{result}</div>;
}
