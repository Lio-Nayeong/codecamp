import React, { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPw, setErrorPw] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePw(event) {
    setPw(event.target.value);
  }
  function onClickSignup() {
    if (!email || !email.includes("@")) {
      setErrorEmail(" ! 이메일를 정확히 입력해 주세요.");
    } else {
      setErrorEmail("");
    }
    if (!pw) {
      setErrorPw(" ! 비밀번호를 정확히 입력해 주세요.");
    } else {
      setErrorPw("");
    }
    if (email && pw && email.includes("@")) {
      alert("모두 입력되었습니다. 회원가입에 성공했습니다.");
    }
  }

  return (
    <div>
      <h1>회원가입</h1>
      <div>이메일 {email}</div>
      <input type="text" onChange={onChangeEmail} />
      <div style={{ color: "red" }}>{errorEmail}</div>
      <div>비밀번호 {pw}</div>
      <input type="text" onChange={onChangePw} />
      <div style={{ color: "red" }}>{errorPw}</div>
      <div>
        <button onClick={onClickSignup}>가입</button>
      </div>
    </div>
  );
}
