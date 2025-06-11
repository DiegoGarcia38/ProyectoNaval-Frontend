// src/app/vessels/[tugId]/page.js
import VesselCard from '../../../components/vessel/vessels/VesselCard';

export default function VesselPage({ params }) {
  const { tugId } = params;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <VesselCard tugId={tugId} />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { tugId: 'asd-tug-3212' },
    { tugId: '3212' },
  ];
}

export async function generateMetadata({ params }) {
  const { tugId } = params;

  return {
    title: `${tugId.toUpperCase()} - Proyecto Naval`,
    description: `Información detallada sobre el vessel ${tugId}`,
  };
}
