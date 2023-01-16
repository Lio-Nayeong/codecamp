import styled from "@emotion/styled";

export default function test() {
  const Wrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    border: 1px solid black;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Img = styled.img`
    width: 300px;
    height: 300px;
  `;
  const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: bold;
  `;
  const Label = styled.div`
    padding: 16px;
    font-size: 16px;
    font-weight: 500;
  `;
  const ID = styled.input`
    border: 1px solid #bdbdbd;
  `;
  const Password = styled.input`
    border: 1px solid #bdbdbd;
  `;

  return (
    <Wrapper>
      <Img src="/vercel.svg" />
      <Title>로그인</Title>
      <Label>아이디</Label>
      <ID type="text" />
      <Label>비밀번호</Label>
      <Password type="password" />
    </Wrapper>
  );
}
