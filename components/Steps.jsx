import { useRouter } from "next/router";

const stepList = [
  { step: 1, name: "Menu", url: "/" },
  { step: 2, name: "Resumen", url: "/resumen" },
  { step: 3, name: "Total", url: "/total" },
];

const Steps = () => {
  const router = useRouter();

  const progressBar = () => {
    switch (router.pathname) {
      case "/":
        return 10;
      case "/resumen":
        return 50;
      case "/total":
        return 100;
      default:
        return 100;
    }
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {stepList.map((step) => (
          <button
            onClick={() => {
              router.push(step.url);
            }}
            className="text-2xl font-bold "
            key={step.step}
          >
            {step.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none text-center text-white
          transition delay-200"
          style={{
            width: `${progressBar()}%`,
          }}
        >
          _
        </div>
      </div>
    </>
  );
};

export default Steps;
