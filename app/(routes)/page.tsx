import Button from "@/_components/base/button";
import { ButtonVariant } from "@/_constants/components/button";
import { Navigator } from "@/_constants/navigator";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl xl:text-9xl">Todo List</h1>
      <h2 className="mb-10 text-xl text-gray-600 xl:text-2xl">
        Manage your task
      </h2>

      <Button variant={ButtonVariant.LINK} navigateTo={Navigator.TODO}>
        Start
      </Button>
    </div>
  );
}
