import ButtonMedium from "@/components/buttons/ButtonMedium";
import Input from "@/components/Input/Input";
import LinkText from "@/components/Link/LinkText";
import React from "react";

const LoginForm = () => {
  return (
    <form
      action=""
      className="form-500  px-6 py-7 mx-4 border rounded-md box-shadow "
    >
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
            <LinkText url="#">新しくアカウントを作成する</LinkText>
          </li>
        </ul>
      </nav>
    </form>
  );
};

export default LoginForm;
