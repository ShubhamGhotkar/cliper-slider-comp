export let userData = {
  wayFair: [],
  localHost: [],
};

console.log("userData from Data", userData);
export function setUserData(data) {
  userData = data;
  console.log("updated User Data", userData);
}
