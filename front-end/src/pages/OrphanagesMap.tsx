import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarkerImg from '../assets/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import '../styles/pages/orphanages-map.css';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

export default function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(res => {
            setOrphanages(res.data);
        });
    }, []);
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy" />
                    <h2>Escolha um orfanato no map</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong> Cianorte </strong>
                    <span> Paraná </span>
                </footer>
            </aside>
            <MapContainer
                center={[-23.6650897,-52.6271413]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                {orphanages.map(orphanage => {
                    return(
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`} className="create-orphanage">
                                    <FiArrowRight size={32} color='fff' />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}
