import carBroken from "../assets/broken-car.jpeg";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center h-screen py-6 text-semibold text-xl">
      <h1 className="text-xl py-2">404 - Page not found </h1>
      <h2 className="mx-8 my-4 text-lg lg:text-xl">
        Even the best travel plans can hit a bump in the road. But hey, it's all
        part of the adventure, right?
      </h2>
      <img
        src={carBroken}
        alt="broken-car"
        className="h-64 lg:h-96 my-24 rounded-md"
      ></img>
    </div>
  );
}

export default PageNotFound;
