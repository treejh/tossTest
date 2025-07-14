export default function Home() {
  console.log("FRONT_BASE_URL", process.env.NEXT_PUBLIC_FRONT_BASE_URL);
  console.log("API_BASE_URL", process.env.NEXT_PUBLIC_API_BASE_URL);

  const socialLoginForKakaoUrl = `http://localhost:8080/oauth2/authorization/kakao`;
  const redirectUrlAfterSocialLogin = "http://localhost:3000";
  return (
    <div className="flex-1 flex justify-center items-center">
      <span className="font-bold">로그인 성공</span>
    </div>
  );
}
