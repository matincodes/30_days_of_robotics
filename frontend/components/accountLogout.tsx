"use client"

const AccountLogout = () => {
  

  const logout = () => {};
  return (
    <div
      className="block w-full text-red-600 py-4 text-base leading-none font-semibold rounded text-center border border-red-600"
      onClick={() => logout()}
    >
      Logout
    </div>
  );
};

export default AccountLogout;