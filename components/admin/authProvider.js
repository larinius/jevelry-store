import axios from "axios";

const authProvider = {
  login: ({ username, password }) => {
    console.log("AUTH", username, password);
    return axios
      .post("/api/adminlogin", { email: username, password: password })
      .then((response) => {
        console.log("Response", response);
        if (response.status !== 201) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => {
        const user = response.data;
        console.log("AUTH", user);
        if (!user.isLoggedIn) {
          console.log("USER IS NOT ADMIN");
          return Promise.reject();
        }

        console.log("USER IS ADMIN");

        localStorage.setItem("username", user.name);
      })
      .catch((error) => {
        throw new Error("Network error");
      });

    // return Promise.resolve({ redirectTo: '/admin' });

    // const request = new Request('/api/login', {
    //     method: 'POST',
    //     body: JSON.stringify({ email:username, password:password }),
    //     headers: new Headers({ 'Content-Type': 'application/json' }),
    // });
    // return fetch(request)
    //     .then(response => {
    //         if (response.status < 200 || response.status >= 300) {
    //             throw new Error(response.statusText);
    //         }
    //         return response.json();

    //     })
    //     .then(auth => {
    //         localStorage.setItem('auth', JSON.stringify(auth));
    //         return Promise.resolve({ redirectTo: '/admin' });
    //     })
    //     .catch(() => {
    //         throw new Error('Network error')
    //     });

    // const request = new Request("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify({ email:username, password:password }),
    //   headers: new Headers({ "Content-Type": "application/json" }),
    // });
    // return fetch(request)
    //   .then((response) => {
    //     if (response.status < 200 || response.status >= 300) {
    //       throw new Error(response.statusText);
    //     }
    //     return response.json();
    //   })
    //   .then((auth) => {
    //     localStorage.setItem("auth", JSON.stringify(auth));
    //     return Promise.resolve();
    //   });
  },

  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () =>
    localStorage.getItem("username")
      ? Promise.resolve({ redirectTo: "/admin" })
      : Promise.reject(),

  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
