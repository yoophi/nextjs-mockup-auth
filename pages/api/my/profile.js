import { getAccessTokenFromHeader } from "../../../utils/token";

export default (req, res) => {
  const accessToken = getAccessTokenFromHeader(req.headers);
  if (accessToken === "kuqu6IeFiizie9eipha8coo7Aey0oosh") {
    res.status(200).json({
      profile: {
        id: 1,
        username: "john",
        name: "John",
      },
    });
  } else {
    res.status(401).json({
      message: "unauthorized",
    });
  }
};
