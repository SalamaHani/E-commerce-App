import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const themes = {
  Dark: "dark",
  Light: "light",
};

const getlocalstorgthemes = () => {
  const theme = localStorage.getItem("themes") || themes.Light;
  document.body.setAttribute("class", theme);
  return theme;
};
const getlocaluser = () => {
  return JSON.parse(
    localStorage.getItem(`User_${localStorage.getItem("UserID")}`)
  );
};
const initialState = {
  user: getlocaluser(),
  themes: getlocalstorgthemes(),
  error: {},
  masegaeerorr: "",
  MnuUser: false,
  ismodeleidt: false,
  isReviewUser: false,
  isrestemealpass: false,
  MasegeForgetpss: "",
  userForgetPss: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
      const user = { ...action.payload.user, token: action.payload.token };
      const User_id = `User_${user.id}`;
      state.user = user;
      state.themes == "dark"
        ? toast.success("Log in successfully", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        : toast.success("Log in successfull", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
      localStorage.setItem("UserID", user.id);
      localStorage.setItem(User_id, JSON.stringify(state.user));
    },
    logoutuser: (state) => {
      localStorage.removeItem(`User_${state.user.id}`);
      localStorage.removeItem("UserID");
      state.user = null;
      state.MnuUser = !state.MnuUser;
      state.themes == "dark"
        ? toast.success("Logged out successfully", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        : toast.success("Logged out successfull", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
    },
    toogeltheme: (state) => {
      const { Dark, Light } = themes;
      state.themes = state.themes == Dark ? Light : Dark;
      document.body.setAttribute("class", state.themes);
      localStorage.setItem("themes", state.themes);
    },
    clearerrors: (state) => {
      state.error = {};
    },
    seterrorsmasge: (state, action) => {
      state.error = action.payload;
    },
    togetllMnuuser: (state) => {
      state.MnuUser = !state.MnuUser;
    },
    toogelModeleidt: (state) => {
      state.ismodeleidt = !state.ismodeleidt;
    },
    UpdateDatauser: (state, action) => {
      console.log("rfdefrde");
      console.log(action.payload);
      const user = { ...action.payload.user, token: state.user.token };
      state.user = user;
      state.ismodeleidt = !state.ismodeleidt;
      localStorage.setItem("User", JSON.stringify(state.user));
      toast.success("is success Update Data", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    },
    handelreves: (state) => {
      state.isReviewUser = !state.isReviewUser;
    },
    handelforgetpass: (state) => {
      state.isrestemealpass = !state.isrestemealpass;
    },
    setMasegeForgrtpss: (state, action) => {
      state.MasegeForgetpss = action.payload;
    },
    setUserDataForgetPss: (state, action) => {
      const userData = action.payload;
      state.userForgetPss = userData;
    },
  },
});
export const {
  toogeltheme,
  loginUser,
  logoutuser,
  clearerrors,
  seterrorsmasge,
  togetllMnuuser,
  toogelModeleidt,
  UpdateDatauser,
  handelreves,
  handelforgetpass,
  setUserDataForgetPss,
  setMasegeForgrtpss,
} = userSlice.actions;
export default userSlice.reducer;
