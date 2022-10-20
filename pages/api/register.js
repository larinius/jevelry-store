import { sessionOptions } from "/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import bcrypt from 'bcryptjs';
import httpStatus from 'http-status';

import prisma from "/lib/prisma";

export default withIronSessionApiRoute(userRegister, sessionOptions);

async function userRegister(req, res) {
  const r = await req.body;


  // const result = await prisma.user.create({
  //   data: {
  //     ...req.body,
  //   },
  // });

  try {
    if (req.method === "POST") {
      //check if user exists

      const userCheck = await prisma.user.findUnique({
        where: {
          email: r.email,
        }
      });

      if (userCheck) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User already exists" });
      }

      // create user
      const hashPassword = await bcrypt.hash(r.password, 10);

      const data = await prisma.user.create({
        data: {
          ...{ name: r.name, email: r.email, password: hashPassword, },
        },
      });

      // req.session.set("user", { id: user.id, email: user.email });
      // await req.session.save();
      


      const user = { isLoggedIn: true, name: data.name, email: data.email};
      req.session.user = user;
      await req.session.save();
      // res.json(user);
      return res.status(httpStatus.OK).end();
    }
    return res.status(httpStatus.BAD_REQUEST).end();
  } catch (error) {
    console.log(error, error.message);
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.message);
  }
}
