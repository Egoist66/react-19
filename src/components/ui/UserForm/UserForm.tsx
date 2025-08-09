import { useActionState, type FC } from "react";
import { useThemeContextProvider } from "../../service/ThemeProvider";

type HandleFormData = {
  firstName: string;
  lastName: string;
  salary: number;
};

export const UserForm: FC = () => {
  const handleFormAction = (
    prevState: HandleFormData,
    formData: FormData
  ): HandleFormData => {
    const newState = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      salary: Number(formData.get("salary")),
    };
    return newState;
  };

  const [formData, action, isPending] = useActionState(handleFormAction, {
    firstName: "",
    lastName: "",
    salary: 0,
  });

  const { theme, toggleTheme } = useThemeContextProvider();

  console.log('render', UserForm.name);
  return (
    <>
      <form
        action={action}
        className="flex flex-col gap-4 p-4 bg-neutral-800 rounded-lg"
      >
        <input
          className="p-2 rounded-lg bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          placeholder="First Name"
          type="text"
          name="firstName"
          id="firstName"
          defaultValue={formData.firstName}
        />
        <input
          className="p-2 rounded-lg bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          placeholder="Last Name"
          type="text"
          name="lastName"
          id="lastName"
          defaultValue={formData.lastName}
        />
        <input
          className="p-2 rounded-lg bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          placeholder="Salary"
          type="number"
          name="salary"
          id="salary"
          defaultValue={formData.salary}
        />

        <button
          className="p-2 rounded-lg bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>

        <pre>{JSON.stringify(formData)}</pre>
      </form>

      <button
        className="p-2 rounded-lg bg-neutral-700 self-baseline cursor-pointer"
        onClick={toggleTheme}
      >
        Toggle Theme {theme}
      </button>
    </>
  );
};

UserForm.displayName = "UserForm";
