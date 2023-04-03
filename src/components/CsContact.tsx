import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import CsButton, { CsButtonType } from "./CsButton";

type FormValues = {
  name: string;
  email: string;
  reachOut: string;
  message: string;
};

export default function CsContact() {
  const validationSchema = object().shape({
    name: string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: string()
      .required("Email is required")
      .email("Invalid email address"),
    reachOut: string().required("This is required"),
    message: string().required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    // Do something with the form data
    console.log(data);
    // const data = new FormData(data);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="input-wrapper flex flex-col">
            <label className="font-lato-bold" htmlFor="name">
              Name
            </label>
            <input
              className="border-0.75 border-black p-5 font-lato-light"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="input-wrapper flex flex-col">
            <label className="font-lato-bold" htmlFor="email">
              Email
            </label>
            <input
              className="border-0.75 border-black p-5 font-lato-light"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="input-wrapper flex flex-col mt-5">
          <label className="font-lato-bold" htmlFor="reachOut">
            Why do you reach out?
          </label>
          <select
            id="reachOut"
            autoComplete="reachOut-name"
            className="border-0.75 border-black p-5 font-lato-light"
            {...register("reachOut")}
          >
            <option>App Redesign</option>
            <option>Mobile Design</option>
            <option>Photography</option>
          </select>

          {errors.reachOut && (
            <p className="text-xs text-red-500">{errors.reachOut.message}</p>
          )}
        </div>

        <div className="input-wrapper flex flex-col mt-5">
          <label className="font-lato-bold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            className="border-0.75 border-black p-5 font-lato-light text-gray-400"
            placeholder={"Hey Chris, my I’m reaching out to you because..."}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        <CsButton className="sm:w-1/2 mt-10" type={CsButtonType.Secondary}>
          Send
        </CsButton>
      </form>
    </div>
  );
}
