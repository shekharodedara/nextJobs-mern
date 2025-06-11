import { useState } from "react";
import { useDispatch } from "react-redux";
import { userService } from "../services/userService";
import { login, logout, setLoadingFalse } from "../store/authSlice";

const useUpdateUserData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const updateUserData = async () => {
    setLoading(true);
    try {
      const userData = await userService.getCurrentUser();
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
      dispatch(setLoadingFalse());
    } catch (error) {
      console.log(error?.message || error);
    } finally {
      setLoading(false);
    }
  };
  return updateUserData;
};

export default useUpdateUserData;