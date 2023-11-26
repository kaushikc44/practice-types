import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");


  const router = useRouter();

  const { login } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    if (
      email === "kaushikc44@gmail.com" &&
      password === "12345678" &&
      username === "kaushikc44"
    ) {
      const Userdata = {
        username,
        email,
        password,
      };

      login(Userdata);
      setEmail("");
      setPassword("");

      router.push("/Dashboard")
    }
  };

  return (
    <>
      <div className="flex flex-col border-2 w-[400px] h-[300px]">
        <div className="">
          <div className=" flex flex-col w-full items-center justify-center border-b mb-3">
            <h1 className=" text-2xl ">Login Page</h1>
          </div>
          <div className="pt-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block">Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  className="w-full p-2 border  bg-black text-white"
                />
              </div>
              <div className="mb-3">
                <label className="block">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="w-full p-2 border  bg-black text-white"
                />
              </div>
              <div className="mb-3">
                <label className="block">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="w-full p-2 border bg-black text-white"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <button type="submit" className="border">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
