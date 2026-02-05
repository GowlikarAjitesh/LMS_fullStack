"use server";

import axios from "axios";
const BACKEND_URL =  "http://localhost:3000";
export async function registerFormActions(prevState, formData) {
  let userDetails={
    "username" : formData.get('username'),
    "email" : formData.get('email'),
    "password" : formData.get('password'),
    "confirmPassword" : formData.get('confirmPassword'),
  };
  console.log(userDetails);
  const state = await axios.post(`${BACKEND_URL}/api/auth/register`, userDetails);
  return state.data;
}
export async function loginFormActions(prevState, formData) {
    console.log("Previous state: ", prevState);
  let userDetails={
    "email" : formData.get('email'),
    "password" : formData.get('password'),
  };
  
  await new Promise((r)=>setTimeout(r, 3000));

  console.log("user data sent successfully...", userDetails);
//   return prevState;
}
