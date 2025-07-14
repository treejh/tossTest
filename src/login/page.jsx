export default function Home() {
  console.log("FRONT_BASE_URL", process.env.NEXT_PUBLIC_FRONT_BASE_URL);
  console.log("API_BASE_URL", process.env.NEXT_PUBLIC_API_BASE_URL);

  // 카카오 로그인 URL
  const socialLoginForKakaoUrl = `https://yetda.kro.kr/oauth2/authorization/kakao`;
  // const socialLoginForKakaoUrl = `http://localhost:8080/oauth2/authorization/kakao`;

  // 깃허브 로그인 URL
  //   const socialLoginForGithubUrl = `http://3.39.9.55:8081/oauth2/authorization/github`;
  const socialLoginForGithubUrl = `https://yetda.kro.kr/oauth2/authorization/github`;

  const redirectAfterLogin = "http://localhost:3000/loginsuccess";

  return (
    <div className="flex-1 flex justify-center items-center">
      {/* 카카오 로그인 */}
      <a
        href={`${socialLoginForKakaoUrl}?state=${encodeURIComponent(
          "http://localhost:3000/loginsuccess"
        )}`}
      >
        <span className="font-bold">카카오 로그인</span>
      </a>

      {/* GitHub 로그인 */}
      {/* <a
        href={`${socialLoginForGithubUrl}?state=${encodeURIComponent(
          redirectAfterLogin
        )}`}
        className="ml-4"
      >
        <span className="font-bold">GitHub 로그인</span>
      </a> */}
      <a href="https://yetda.kro.kr/oauth2/authorization/github">
        <span className="font-bold">GitHub 로그인</span>
      </a>
    </div>
  );
}
