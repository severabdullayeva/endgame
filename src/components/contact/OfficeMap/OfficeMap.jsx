import React from 'react'
import styles from '../OfficeMap/OfficeMap.module.css'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const OfficeMap = () => {
    const position = [40.4093, 49.8671]

    return (
        <div className={styles.sectionMap}>
            <div className={styles.header}>
                <h2>Our Office</h2>
                <p>Come visit us or find us on the map</p>
            </div>

            <div className={styles.mapWrapper}>

                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>

                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={position}>
                        <Popup>
                            📍 Our Office <br />
                            Baku, Azerbaijan
                        </Popup>
                    </Marker>

                </MapContainer>

                <div
                    className={styles.overlayCard}
                    onClick={() =>
                        window.open("https://www.google.com/maps?q=40.4093,49.8671")
                    }
                >
                    <h4>📍 Baku Office</h4>
                    <p>28 May, Baku</p>
                </div>

            </div>
        </div>
    )
}

export default OfficeMap