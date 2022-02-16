import Head from "next/head";
import { From } from "antd";

import AppLayout from "../components/AppLayout";
import { useCallback, useState } from "react";

const Signup = () => {
  const [id, setId] = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const [nickname, setNickname] = useState("");
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = useCallback(() => {
    // onFinish는 내부적으로 e.prevent.default가 자동으로 됨
  }, []);
  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input
              name="user-password-check"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
