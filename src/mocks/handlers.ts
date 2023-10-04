import { rest } from "msw";

const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/newMessage`,
    async (req, res, ctx) => {
      const email = (await req.json()).email;
      if (email === "c@a") {
        return res(
          ctx.status(200),
          ctx.json({
            message: "Message received!",
          })
        );
      }
      if (email === "i@a") {
        return res(
          ctx.status(400),
          ctx.json({
            code: 400,
            error: true,
            message: "Invalid message",
          })
        );
      }
    }
  ),
];

export default handlers;
