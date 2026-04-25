import React from 'react'
import styles from '../OfficeMap/OfficeMap.module.css'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

const OfficeMap = () => {
    const position = [40.4093, 49.8671]
    return (
        <div className={styles.sectionMap}>
            <div className={styles.header}>
                <h2>Our Office</h2>
                <p>Come visit us or find us on the map</p>
            </div>
            <div className={styles.mapWrapper}>

                <MapContainer center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            📍 Our Office <br />
                            Baku, Azerbaijan
                        </Popup>
                    </Marker>
                </MapContainer>
                <div className={styles.overlayCard}
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