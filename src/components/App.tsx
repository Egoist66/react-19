import { useEffect, type FC } from "react";
import { Layout } from "./layout/Layout";
import { UserForm } from "./ui/UserForm/UserForm";
import { ErrorBoundary } from "./service/ErrorBoundary";
import { useThemeContextProvider } from "./service/ThemeProvider";
import { Counter } from "./ui/Counter/Counter";

const App: FC = () => {
  //const [val, setValue] = useState<number>(0);

  const { theme } = useThemeContextProvider();

  console.log("render", App.name);

  useEffect(() => {
    document.documentElement.className = theme;

    if (document.documentElement.className.includes("dark")) {
      document.documentElement.style.background = "black";
      document.documentElement.style.color = "white";
    } else {
      document.documentElement.style.background = "white";
      document.documentElement.style.color = "black";
    }
  }, [theme]);

  return (
    <Layout
      header={() => (
        <img
          className="h-8 w-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
      )}
    >
      <ErrorBoundary>
        {/* <MovieCard
          setValue={setValue}
          className="cursor-pointer"
          image={
            "https://nevadasportsnet.com/resources/media/260213d5-b8e5-468d-9762-eeace7ec42d7-largeScale_theboys.jpg?1658511059815"
          }
          rating={8.8}
        /> */}

        <Counter />
      </ErrorBoundary>

      <UserForm />
    </Layout>
  );
};

export default App;
