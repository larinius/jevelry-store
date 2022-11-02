import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";
import prisma from "/lib/prisma";
import bcrypt from "bcryptjs";

export default withIronSessionApiRoute(async (req, res) => {

  console.log("LOGIN",req.body);

  try {
    const data = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    const valid = await bcrypt.compare(req.body.password, data.password);

    if (valid) {

      const user = { isLoggedIn: true, name: data.name, email: data.email, group: data.userGroupId, isActive: data.isActive};
      console.log(data);
      req.session.user = user;
      await req.session.save();
      res.status(201).json(user);
    } else {
      console.log("Login failed");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);
