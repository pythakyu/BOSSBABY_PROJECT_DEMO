const userService = require("../services/userService");
const { catchAsync } = require("../middlewares/error");
const { detectError } = require("../utils/detectError");

const kakaoLogin = catchAsync(async (req, res) => {
  const kakaoToken = req.headers.authorization;

  if (!kakaoToken) detectError("NEED_KAKAO_TOKEN", 401);

  const accessToken = await userService.kakaoLogin(kakaoToken);

  return res.status(200).json({ accessToken: accessToken });
});

module.exports = { kakaoLogin };
