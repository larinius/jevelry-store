import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";
import prisma from "/lib/prisma";
import bcrypt from "bcryptjs";

export default withIronSessionApiRoute(async (req, res) => {
  console.log(req.body);

  try {
    const data = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    console.log("data", data);

    const valid = await bcrypt.compare(req.body.password, data.password);

    if (valid) {
      console.log("LOGED IN");

      const user = { isLoggedIn: true, name: data.name, email: data.email };
      req.session.user = user;
      await req.session.save();
      res.status(201).json(user);
    } else {
      console.log("Login failded");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);
