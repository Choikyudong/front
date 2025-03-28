import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function UsersMenu() {
  const navigate = useNavigate();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [curTheme, setCurTheme] = useState(localStorage.getItem('theme') || 'default');

  // 처음 로드될 때 localStorage에서 테마 가져오기
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    setCurTheme(savedTheme);
  }, []);

  // 테마 변경 함수
  const changeTheme = (theme) => {
    localStorage.setItem('theme', theme);
    setCurTheme(theme);
    applyTheme(theme);
  };

  // 테마 적용 함수
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // 시스템 기본값일 경우
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const handleLogOut = async () => {
    try {
      // 기능 미완성
      // const response = await logOut(1);
      alert('로그아웃');
      localStorage.setItem("isLogIn", "false");
      localStorage.setItem("token", undefined);
      localStorage.setItem("userInfo", undefined);
      navigate('/');
    } catch (error) {
      alert('로그아웃 실패');
      console.error("로그아웃 실패 ", error);
    }
  };

  applyTheme(curTheme);
  return (
    <>
      <div className="px-4 py-2 text-gray-800 font-semibold border-b">시스템 설정</div>
      <div className="p-2">
        <Link
          className="flex items-center space-x-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg"
          to={`/${JSON.parse(localStorage.getItem("userInfo")).name}/info`}
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 0 L 9.5644531 0.01953125 L 9.1328125 0.076171875 L 8.7050781 0.16992188 L 8.2890625 0.30273438 L 7.8867188 0.46875 L 7.5 0.66992188 L 7.1328125 0.90625 L 6.7871094 1.171875 L 6.4628906 1.4648438 L 6.1699219 1.7871094 L 5.9042969 2.1328125 L 5.6699219 2.5 L 5.46875 2.8886719 L 5.3027344 3.2910156 L 5.1699219 3.7070312 L 5.0761719 4.1328125 L 5.0195312 4.5664062 L 5 5.0019531 L 5.0175781 5.6816406 L 5.0742188 6.359375 L 5.1660156 7.0351562 L 5.2949219 7.703125 L 5.4589844 8.3613281 L 5.6601562 9.0136719 L 5.8984375 9.6523438 L 6.1660156 10.275391 L 6.4707031 10.884766 L 6.6523438 11.193359 L 6.8632812 11.484375 L 6.9296875 11.595703 L 6.9648438 11.720703 L 6.96875 11.847656 L 6.9375 11.974609 L 6.875 12.087891 L 6.7871094 12.181641 L 6.6777344 12.25 L 6.5527344 12.287109 L 5.6953125 12.449219 L 4.84375 12.646484 L 4.0019531 12.878906 L 3.1699219 13.146484 L 2.3515625 13.445312 L 2.0351562 13.591797 L 1.7382812 13.771484 L 1.4648438 13.986328 L 1.2167969 14.230469 L 0.99804688 14.5 L 0.81445312 14.794922 L 0.6640625 15.109375 L 0.46484375 15.652344 L 0.296875 16.208984 L 0.16796875 16.775391 L 0.07421875 17.345703 L 0.01953125 17.923828 L 0 18.503906 L 0.01953125 18.644531 L 0.080078125 18.775391 L 0.171875 18.882812 L 0.29296875 18.958984 L 0.42773438 19 L 0.57226562 19 L 0.70703125 18.958984 L 0.828125 18.882812 L 0.91992188 18.775391 L 0.98046875 18.644531 L 1 18.503906 L 1.0175781 17.988281 L 1.0664062 17.476562 L 1.1484375 16.964844 L 1.2636719 16.464844 L 1.4121094 15.96875 L 1.5898438 15.486328 L 1.7089844 15.242188 L 1.859375 15.017578 L 2.0390625 14.816406 L 2.2441406 14.640625 L 2.4707031 14.492188 L 2.7148438 14.378906 L 3.4960938 14.089844 L 4.2871094 13.835938 L 5.0878906 13.615234 L 5.9003906 13.427734 L 6.7167969 13.273438 L 6.9472656 13.216797 L 7.1699219 13.123047 L 7.3710938 12.996094 L 7.5507812 12.835938 L 7.7011719 12.652344 L 7.8222656 12.443359 L 7.9101562 12.220703 L 7.9570312 11.986328 L 7.9707031 11.748047 L 7.9433594 11.509766 L 7.8789062 11.279297 L 7.7792969 11.0625 L 7.6484375 10.865234 L 7.4902344 10.644531 L 7.3535156 10.416016 L 7.0742188 9.8554688 L 6.8261719 9.2792969 L 6.609375 8.6933594 L 6.4238281 8.09375 L 6.2734375 7.4863281 L 6.1542969 6.8710938 L 6.0683594 6.2519531 L 6.015625 5.6289062 L 6 5.0019531 L 6.0195312 4.609375 L 6.078125 4.2207031 L 6.171875 3.8398438 L 6.3046875 3.4707031 L 6.4726562 3.1152344 L 6.6738281 2.7792969 L 6.9082031 2.4628906 L 7.1699219 2.171875 L 7.4628906 1.9082031 L 7.7773438 1.6738281 L 8.1152344 1.4746094 L 8.4707031 1.3046875 L 8.8398438 1.1738281 L 9.21875 1.078125 L 9.6074219 1.0195312 L 10 1 L 10.392578 1.0195312 L 10.78125 1.078125 L 11.160156 1.1738281 L 11.529297 1.3046875 L 11.886719 1.4746094 L 12.222656 1.6738281 L 12.537109 1.9082031 L 12.830078 2.171875 L 13.091797 2.4628906 L 13.326172 2.7792969 L 13.527344 3.1152344 L 13.695312 3.4707031 L 13.828125 3.8398438 L 13.923828 4.2207031 L 13.982422 4.609375 L 14 5.0019531 L 13.984375 5.6289062 L 13.931641 6.2519531 L 13.845703 6.8710938 L 13.728516 7.4863281 L 13.576172 8.09375 L 13.390625 8.6933594 L 13.173828 9.2792969 L 12.925781 9.8554688 L 12.646484 10.416016 L 12.509766 10.644531 L 12.351562 10.865234 L 12.220703 11.0625 L 12.121094 11.279297 L 12.056641 11.509766 L 12.029297 11.748047 L 12.042969 11.986328 L 12.091797 12.220703 L 12.177734 12.443359 L 12.298828 12.652344 L 12.451172 12.835938 L 12.628906 12.996094 L 12.830078 13.123047 L 13.029297 13.207031 C 13.059207 12.858774 13.130003 12.521597 13.255859 12.208984 L 13.212891 12.181641 L 13.125 12.087891 L 13.0625 11.974609 L 13.033203 11.847656 L 13.035156 11.720703 L 13.070312 11.595703 L 13.136719 11.484375 L 13.347656 11.193359 L 13.529297 10.884766 L 13.833984 10.275391 L 14.103516 9.6523438 L 14.339844 9.0136719 L 14.541016 8.3613281 L 14.705078 7.703125 L 14.833984 7.0351562 L 14.925781 6.359375 L 14.982422 5.6816406 L 15 5.0019531 L 14.982422 4.5664062 L 14.923828 4.1328125 L 14.830078 3.7070312 L 14.697266 3.2910156 L 14.53125 2.8886719 L 14.330078 2.5 L 14.097656 2.1328125 L 13.830078 1.7871094 L 13.537109 1.4648438 L 13.212891 1.171875 L 12.869141 0.90625 L 12.5 0.66992188 L 12.113281 0.46875 L 11.710938 0.30273438 L 11.294922 0.16992188 L 10.867188 0.076171875 L 10.435547 0.01953125 L 10 0 z M 16.5 11 C 15.12521 11 14 12.12521 14 13.5 L 14 15 L 13 15 L 13 20 L 20 20 L 20 15 L 19 15 L 19 13.5 C 19 12.12521 17.87479 11 16.5 11 z M 16.5 12 C 17.334349 12 18 12.665651 18 13.5 L 18 15 L 15 15 L 15 13.5 C 15 12.665651 15.665651 12 16.5 12 z M 14 16 L 19 16 L 19 19 L 14 19 L 14 16 z "/>
          </svg>
          <span>사용자 설정</span>
        </Link>
      </div>
      <div className="p-2">
        <button
          className="flex items-center space-x-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>디스플레이 설정</span>
        </button>
      </div>
      <div className="p-2">
        <button
          className="flex items-center space-x-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg"
          onClick={handleLogOut}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>로그아웃</span>
        </button>
      </div>

      {isSubMenuOpen && (
          <div className="absolute right-full top-10 w-full bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <div className="p-2 flex">
              <button
                  className="flex items-center justify-between space-x-2 w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => changeTheme('default')}
              >
                <span className="text-blue-500">시스템 기본값</span>
                {curTheme === 'default' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
              </button>
            </div>
            <div className="p-2 flex">
              <button
                  className="flex items-center justify-between space-x-2 w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => changeTheme('light')}
              >
                <span className="text-blue-500">라이트 모드</span>
                {curTheme === 'light' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
              </button>
            </div>
            <div className="p-2 flex">
              <button
                  className="flex items-center justify-between space-x-2 w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => changeTheme('dark')}
              >
                <span className="text-blue-500">다크 모드</span>
                {curTheme === 'dark' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
              </button>
            </div>
          </div>
      )}
    </>
  );
}
