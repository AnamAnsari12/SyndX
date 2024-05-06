import { apis, headers } from "../../constants/appLevelConstants";
import axios from "axios";
export function createUser(userData) {
    return new Promise((resolve, reject) => {
      fetch(apis.BASE_URL + apis.API_USER_ACCOUNT_CREATION, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(userData),
      }
      ).then(async (res) => {
        const data = await res.json();
        if (data) {
          resolve(data);
        } else {
          reject({ message: "Email already exists" })
        }
      }, (error) => {
        reject([error]);
      });
    });
  }

export function checkUser(userData) {
    return new Promise((resolve, reject) => {
      axios.get(apis.BASE_URL + apis.API_USER_ACCOUNT_CREATION + `?username=${userData.username}&password=${userData.password}`, headers
      ).then(async (res) => {
        if (res && res.data) {
          resolve(res.data);
        } else {
          reject({ message: "Invalid Credentials" })
        }
      }, (error) => {
        reject({ message: "Invalid Credentials" });
      });
    });
  }