// Utility Types :
// Typescript의 generic를 이용하여 일반적인 Type 변환을 쉽게 할 수 있도록 하는 Type
export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick(선택) 타입
  type a = Pick<IProfile, "name" | "age">;

  // 2. Omit(제외) 타입
  type b = Omit<IProfile, "school">;

  // 3. Partial(부분) 타입
  type c = Partial<IProfile>;

  // 4. Required(필수) 타입
  type d = Required<IProfile>;

  // 5. Union(유일) 타입
  type e = "가" | "나" | "다"; //
  let child: e;
  child = "가";

  // 6. Record(매칭) 타입
  type f = Record<e, IProfile>;

  /* type VS interface : 선언 병합 차이 */
  interface IProfile {
    candy: number;
  }
  let profile: Partial<IProfile> = {};
  profile.candy = 10;

  return <div>{profile.candy}</div>;
}
