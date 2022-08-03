import Link from "next/link";
const Auth = () => {
  return (
    <div className="w-1/5 flex items-center px-2">
      <Link href="/auth/login">
        <a className="flex items-center hover:text-blue-600">
          <span className="mdi mdi-account-lock-open-outline ml-2 mdi-24px" />
          <span className="text-sm">ورود / ثبت نام</span>
        </a>
      </Link>
    </div>
  );
};

export default Auth;
