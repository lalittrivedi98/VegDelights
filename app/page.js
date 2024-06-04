import metadata from './metadata';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
      <p className="text-lg">{metadata.description}</p>
    </div>
  );
}
