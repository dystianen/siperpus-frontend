import { atom } from "jotai";

const openedPopupLogin = atom<boolean>(false);
const openedPopupRegister = atom<boolean>(false);
const activeSidebar = atom<string>("1");

export { openedPopupLogin, openedPopupRegister, activeSidebar };
