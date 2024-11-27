import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [paquetesComprados, setPaquetesComprados] = useState([]);

    const agregarPaquete = (nuevoPaquete) => {
        setPaquetesComprados((prevPaquetes) => {
            const paqueteExistente = prevPaquetes.find(paquete => paquete.id === nuevoPaquete.id);
            if (paqueteExistente) {
                return prevPaquetes.map(paquete =>
                    paquete.id === nuevoPaquete.id
                        ? { ...paquete, cantidad: paquete.cantidad + nuevoPaquete.cantidad }
                        : paquete
                );
            } else {
                return [...prevPaquetes, nuevoPaquete];
            }
        });
    };

    return (
        <CarritoContext.Provider value={{ paquetesComprados, agregarPaquete }}>
            {children}
        </CarritoContext.Provider>
    );
};