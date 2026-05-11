import PackageCard from "./PackageCard.jsx";

export default function PackageGrid({ packages, romantic = false }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {packages.map((tour) => (
        <PackageCard key={tour.slug} tour={tour} romantic={romantic} />
      ))}
    </div>
  );
}
