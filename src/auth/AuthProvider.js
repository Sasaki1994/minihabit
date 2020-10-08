import React, { useEffect, useState } from "react";
import firebase from "../../firebase.config";

// contextの作成
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // ユーザーをログインさせる関数
  const login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        if (error.code === "auth/wrong-password") {
          alert("パスワードが一致しません");
        } else {
          alert(error.message);
        }
      });
  };

  // 新しいユーザーを作成しログインさせる関数
  const signup = (email, password, confirmation) => {
    if (password !== confirmation) {
      alert("パスワードとパスワード確認が一致しません");
      return null;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        if (error.code === "auth/weak-password") {
          alert("パスワードをセキュリティを高いものに変更してください");
        } else {
          alert(error.message);
        }
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login,
        signup,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
