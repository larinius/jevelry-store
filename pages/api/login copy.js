import { Octokit } from "octokit";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import prisma from '/lib/prisma'
import bcrypt from 'bcryptjs';

export default withIronSessionApiRoute(async (req, res) => {

  try {
    // const {
    //   data: { login, avatar_url },
    // } = await octokit.rest.users.getByUsername({ username });

    const data = await prisma.user.findUnique({
      where: {
        email: req.body.email
      }
    });

    const valid = await bcrypt.compare(req.body.password, data.password);

    if(valid){

      const user = { isLoggedIn: true, name: data.name, email: data.email};
      req.session.user = user;
      await req.session.save();
      res.json(user);
    }
    else{

      console.log("Login failded");
    }



  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);
