import React from "react";

const Login = () => {
  return (
    <div className="flex h-5/6 items-end justify-center">
      <div className="flex h-5/6 w-10/12 flex-col items-center justify-end gap-4 rounded-t-xl bg-mywhite pb-14">
        <div>
          <h1 className="z-10 text-7xl">이약머약</h1>
        </div>
        <p className="flex text-center text-neutral-400">
          약봉투 사진을 업로드하고
          <br /> 복약정보부터 병용금기 약물 조회까지 <br></br>쉽게 이용하세요!{" "}
          <br></br>지금, 나만의 약사를 만나보세요!
        </p>
        <div className="border-mybgcolor-50 flex h-40 w-40 items-center justify-center rounded-full border-4 bg-mywhite">
          <svg
            className="pl-3"
            width="71"
            height="78"
            viewBox="0 0 41 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7656 48H7.48438C5.50066 47.996 3.59938 47.2378 2.19668 45.8912C0.793984 44.5446 0.00412844 42.7194 0 40.815V7.185C0.00412844 5.28064 0.793984 3.45541 2.19668 2.10882C3.59938 0.762225 5.50066 0.00396331 7.48438 0L23.7656 0C25.7493 0.00396331 27.6506 0.762225 29.0533 2.10882C30.456 3.45541 31.2459 5.28064 31.25 7.185V7.5C31.25 7.89782 31.0854 8.27936 30.7924 8.56066C30.4993 8.84196 30.1019 9 29.6875 9C29.2731 9 28.8757 8.84196 28.5826 8.56066C28.2896 8.27936 28.125 7.89782 28.125 7.5V7.185C28.125 6.07507 27.6657 5.0106 26.8482 4.22576C26.0306 3.44092 24.9218 3 23.7656 3H7.48438C6.3282 3 5.21937 3.44092 4.40183 4.22576C3.58429 5.0106 3.125 6.07507 3.125 7.185V40.815C3.125 41.9249 3.58429 42.9894 4.40183 43.7742C5.21937 44.5591 6.3282 45 7.48438 45H23.7656C24.9218 45 26.0306 44.5591 26.8482 43.7742C27.6657 42.9894 28.125 41.9249 28.125 40.815V37.5C28.125 37.1022 28.2896 36.7206 28.5826 36.4393C28.8757 36.158 29.2731 36 29.6875 36C30.1019 36 30.4993 36.158 30.7924 36.4393C31.0854 36.7206 31.25 37.1022 31.25 37.5V40.815C31.2459 42.7194 30.456 44.5446 29.0533 45.8912C27.6506 47.2378 25.7493 47.996 23.7656 48Z"
              fill="#0F0F0F"
            />
            <path
              d="M15.625 42C15.0069 42 14.4027 41.8241 13.8888 41.4944C13.3749 41.1648 12.9744 40.6962 12.7379 40.1481C12.5014 39.5999 12.4395 38.9967 12.56 38.4147C12.6806 37.8328 12.9783 37.2982 13.4153 36.8787C13.8523 36.4591 14.4092 36.1734 15.0153 36.0576C15.6215 35.9419 16.2499 36.0013 16.8209 36.2284C17.3919 36.4554 17.88 36.8399 18.2233 37.3333C18.5667 37.8266 18.75 38.4067 18.75 39C18.75 39.7957 18.4208 40.5587 17.8347 41.1213C17.2487 41.6839 16.4538 42 15.625 42Z"
              fill="#0F0F0F"
            />
            <path
              d="M20.3125 9H10.9375C10.5231 9 10.1257 8.84196 9.83265 8.56066C9.53962 8.27936 9.375 7.89782 9.375 7.5C9.375 7.10218 9.53962 6.72064 9.83265 6.43934C10.1257 6.15804 10.5231 6 10.9375 6H20.3125C20.7269 6 21.1243 6.15804 21.4174 6.43934C21.7104 6.72064 21.875 7.10218 21.875 7.5C21.875 7.89782 21.7104 8.27936 21.4174 8.56066C21.1243 8.84196 20.7269 9 20.3125 9Z"
              fill="#0F0F0F"
            />
            <path
              d="M40.625 18.7951C40.6261 17.4495 40.2111 16.1338 39.4324 15.0149C38.6537 13.896 37.5466 13.0243 36.2512 12.5101C34.9559 11.996 33.5307 11.8627 32.1563 12.1271C30.7819 12.3914 29.5203 13.0416 28.5313 13.9951L20.8281 21.3901C19.8425 22.3423 19.172 23.553 18.9009 24.87C18.6298 26.1869 18.7702 27.5515 19.3045 28.792C19.8388 30.0326 20.7431 31.094 21.9038 31.8427C23.0645 32.5914 24.4298 32.994 25.8281 33.0001C26.7577 33.0021 27.6783 32.8268 28.5367 32.4843C29.395 32.1418 30.1739 31.639 30.8281 31.0051L34.6719 27.3151L38.5156 23.6251C39.1868 22.9971 39.7195 22.2458 40.0819 21.416C40.4443 20.5862 40.629 19.6948 40.625 18.7951ZM28.6406 28.8901C28.2737 29.243 27.8377 29.5228 27.3577 29.7133C26.8777 29.9039 26.3632 30.0013 25.8438 30.0001C25.322 30.0021 24.805 29.9049 24.3225 29.7141C23.8401 29.5233 23.4018 29.2428 23.0328 28.8886C22.6639 28.5344 22.3716 28.1136 22.1729 27.6504C21.9742 27.1873 21.8729 26.691 21.875 26.1901C21.8792 25.1842 22.2944 24.2202 23.0313 23.5051L25.7813 20.8651L31.3906 26.2501L28.6406 28.8901ZM37.5 18.8101C37.4958 19.8159 37.0806 20.78 36.3438 21.4951L33.5938 24.1351L27.9844 18.7501L30.7344 16.1101C31.2893 15.5809 31.9948 15.2209 32.7622 15.0754C33.5296 14.9299 34.3246 15.0053 35.0475 15.2922C35.7704 15.579 36.3888 16.0646 36.8252 16.6878C37.2615 17.311 37.4963 18.0442 37.5 18.7951V18.8101Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
        <button type="button">
          <img src="/assets/kakaoLogin.svg" alt="kakao login"></img>
        </button>
      </div>
    </div>
  );
};

export default Login;
