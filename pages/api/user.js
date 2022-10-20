import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req, res) {

  if (req.session.user) {
    res.json({
      ...req.session.user,
    });
  } else {

    const user = { isLoggedIn: false};
    req.session.user = user;
    await req.session.save();

    res.json({
      ...req.session.user,
    });
  }
}
