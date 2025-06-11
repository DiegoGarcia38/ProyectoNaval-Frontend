// src/app/vessels/[tugId]/page.js
import VesselCard from '../../../components/vessel/vessels/VesselCard';

export default async function VesselPage({ params }) {
  const { tugId } = await params; // Agregar await aquí

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
  const { tugId } = await params;
  
  return {
    title: `${tugId.toUpperCase()} - Proyecto Naval`,
    description: `Detailed specifications for the ${tugId.toUpperCase()} vessel`,
  };
}