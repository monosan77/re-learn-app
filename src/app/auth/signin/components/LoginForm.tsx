import ButtonMedium from "@/components/buttons/ButtonMedium";
import Input from "@/components/Input/Input";
import LinkText from "@/components/Link/LinkText";
import React from "react";
import Card from "./Card";

const LoginForm = () => {
  return (
    <Card>
      <form action="" className="form-500    ">
        <div className="mb-4">
          <label htmlFor="email">メールアドレス</label>
          <Input type="text" name="email" id="email" />
        </div>
        <div className="mb-10">
          <label htmlFor="password">パスワード</label>
          <Input type="text" name="password" id="password" />
        </div>
        <ButtonMedium type="submit" buttonText="ログイン" />
        <nav>
          <ul className="text-center mt-7">
            <li className="flex justify-center">
              <LinkText url="#">パスワードをお忘れの方</LinkText>
            </li>
            <li className="flex justify-center">
              <LinkText url="/users/signin">
                新しくアカウントを作成する
              </LinkText>
            </li>
          </ul>
        </nav>
      </form>
    </Card>
  );
};

export default LoginForm;
