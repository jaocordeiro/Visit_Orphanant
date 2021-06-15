import mapMarkerImg from '../assets/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function OrphanagesMap() {
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
                center={[23.6650897,-52.6271413]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >   
                <TileLayer 
                    //url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </MapContainer>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}
