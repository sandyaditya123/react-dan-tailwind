export default function Heading({ firstName, lastName }) {
  return (
    <h1 className="text-center text-2xl font-bold tracking-widest">
      {firstName}
      <span className="text-indigo-500">{lastName}</span>
    </h1>
  );
}
