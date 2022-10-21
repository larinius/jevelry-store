import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
  GET_MANY,
  GET_MANY_REFERENCE,
} from "react-admin";

// export default (type, resource, params) => {
//   let url = "";
//   const options = {
//     headers: new Headers({
//       Accept: "application/json",
//     }),
//   };

//   console.log(type);

//   switch (type) {
//     case GET_LIST: {
//       console.log("Get list");

//       const data = [
//         { id: 1, title: "Product A" },
//         { id: 2, title: "Product A" },
//       ];
//       const total = data.length;
//       return { data: data, total: total };
//       break;
//     }
//     case GET_ONE: {
//       break;
//     }
//     case CREATE: {
//       break;
//     }
//     case UPDATE: {
//       break;
//     }
//     case UPDATE_MANY: {
//       break;
//     }
//     case DELETE_MANY: {
//       break;
//     }
//     case GET_MANY_REFERENCE: {
//       break;
//     }
//     default:
//       throw new Error(`Unsupported Data Provider request type ${type}`);
//   }
// };

export default {
  getList: (resource, params) => {
    console.log("Get List");
    const data = [

        { id: 123, title: "hello, world" },
        { id: 124, title: "good day sunshise" },
        { id: 125, title: "howdy partner" },

    ];
    const total = data.length;
    return { data: data, total: total };
    return Promise.resolve();
  },

  getOne: (resource, params) => {
    return Promise.reject();
  },

  getMany: (resource, params) => {
    return Promise.reject();
  },

  getManyReference: (resource, params) => {
    return Promise.reject();
  },

  create: (resource, params) => {
    return Promise.reject();
  },

  update: (resource, params) => {
    return Promise.reject();
  },

  updateMany: (resource, params) => {
    return Promise.reject();
  },

  delete: (resource, params) => {
    return Promise.reject();
  },

  deleteMany: (resource, params) => {
    return Promise.reject();
  },
  toJSON:(resource, params) => {
    return Promise.reject();
  },
};
