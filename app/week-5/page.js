import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-black">Week 5</h1>
      <NewItem />
    </main>
  );
}
