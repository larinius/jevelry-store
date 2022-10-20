import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";
import prisma from "/lib/prisma";
import useUser from "/lib/useUser";

export default withIronSessionApiRoute(async (req, res) => {

    const fingerprint = req.body.fingerprint;

    console.log("SESSION", req.session);
    
    if(req.session.user){
        req.session.user.fingerprint = fingerprint;
        await req.session.save();
    }

    res.status(201).json("session updated");

//   try {
//     const data = await prisma.session.findUnique({
//       where: {
//         sessionId: req.body.session,
//       },
//     });

//     console.log("data", data);

//     if (data) {
//       console.log("Session found");
//     } else {
//       console.log("Session not found. Create new");
//     }
    
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
}, sessionOptions);
