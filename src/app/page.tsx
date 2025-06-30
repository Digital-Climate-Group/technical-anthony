import Image from "next/image";
import * as z from "zod/v4";

const User = z.object({
  email: z.email(),
  password: z.string(),
});

type User = z.infer<typeof User>;

const user: User = { email: "", password: "" };

export default function Home({ ...pros }) {
  const submitForm = async () => {
    alert("login");
  };

  return (
    <div className="bg-sidebar-background flex justify-start item-start">
      <div className="flex-1 self-stretch p-3 flex justify-start items-start gap-3 overflow-hidden">
        <div className="flex-1 self-stretch px-20 py-5 relative bg-slate-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-border inline-flex flex-col justify-center items-center overflow-hidden">
          {/* LOGO */}
          <div
            data-type="md"
            className="left-[-170px] top-[61px] absolute opacity-5"
          >
            <Image src="Logo.svg" alt={"Logo"} width={729} height={805} />
          </div>
          {/* LOGO END */}
          <form className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch pb-6 flex flex-col justify-start items-start gap-2">
              <div className="inline-flex justify-center items-center gap-2">
                <div className="justify-start text-foreground text-2xl font-medium font-sans leading-loose">
                  Welcome back to
                </div>
                <div className="w-8 h-8 p-2 bg-sidebar-primary rounded-lg flex justify-center items-center">
                  <div
                    data-type="sm"
                    className="w-3.5 h-4 relative overflow-hidden"
                  >
                    <Image src="Logo.svg" alt={"Logo"} width={15} height={17} />
                  </div>
                </div>
                <div className="justify-start text-foreground text-2xl font-medium font-sans leading-loose">
                  DCGx
                </div>
              </div>
              <div className="self-stretch justify-start text-muted-foreground text-sm font-normal font-sans leading-tight">
                Enter your details below to login to your DCGx account
              </div>
            </div>
            <div className="self-stretch pb-6 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-start items-start gap-2 flex-1 justify-start text-['foreground'] text-sm font-medium font-sans leading-tight">
                  Email
                </div>
                <input
                  className="self-stretch inline-flex justify-start items-center gap-2 text-foreground text-sm font-normal font-['Poppins'] leading-tight flex-1 px-3 py-2.5 bg-slate-950 rounded-md outline outline-1 outline-offset-[-1px] outline-input flex justify-start items-center"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-start items-start gap-2">
                  <div className="flex-1 justify-start text-foreground text-sm font-medium font-sans leading-tight">
                    Password
                  </div>
                  <div className="text-center justify-start text-slate-400 text-sm font-light font-sans leading-tight">
                    Forgot your password?
                  </div>
                </div>
                <input
                  className="caret-foreground self-stretch inline-flex justify-start items-center gap-2 text-foreground text-sm font-normal font-['Poppins'] leading-tight flex-1 px-3 py-2.5 bg-slate-950 rounded-md outline outline-1 outline-offset-[-1px] outline-input flex justify-start items-center"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-2">
              <div
                data-destructive="False"
                data-icon-leading="false"
                data-icon-trailing="false"
                data-size="md"
                data-state="Normal"
                data-type="Primary"
                className="self-stretch min-w-20 px-3 py-2 bg-primary rounded-md inline-flex justify-center items-center gap-1 overflow-hidden"
              >
                <div className="px-1 flex justify-start items-start justify-start text-primary-foreground text-sm font-normal font-sans leading-normal">
                  Login
                </div>
              </div>
            </div>
          </form>
        </div>

        <Image
          className="flex-1 self-stretch relative rounded-xl cover"
          src="Image.svg"
          alt="Pic"
          height={600}
          width={600}
        />
      </div>
    </div>
  );
}
