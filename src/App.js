import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Add from "./components/diaries/Add";
import Auth from "./components/auth/Auth";
import Diaries from "./components/diaries/Diaries";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import UpdateDiary from "./components/diaries/UpdateDiary";
import { useEffect, useRef } from "react";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const mountRef = useRef(true);

  useEffect(() => {
    if (mountRef.current) {
      mountRef.current = false;
      console.log("====================================");
      console.log("App");
      console.log("====================================");
      if (localStorage.getItem("userId")) {
        dispatch(authActions.login());
      }
    }
  }, [dispatch]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />
          {isLoggedIn && (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<UpdateDiary />} />
            </>
          )}
        </Routes>
      </section>
    </div>
  );
}

export default App;
