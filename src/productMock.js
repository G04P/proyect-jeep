const products = [
    {
        id: '1',
        name : 'Jeep Grand Cherokee',
        description : 'Jeep Grand Cherokee 3.6',
        img : 'https://imgs.search.brave.com/RthWn3GhzJ4XfM7SewWzOYCeTPZRw_pJCnCmOn8oT5E/rs:fit:860:0:0/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9qZWVwL2plZXBf/UE5HNzEucG5n',
        category : 'Drive',
        models :{
            1 : {
                subName: 'GRAND CHEROKEE LIMITED',
                price : 155000000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/modelizer/limited/2023/PW7_Bright_White.png.img.2880.png'
                    
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/modelizer/limited/2023/PXJ_Diamond_Black.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/modelizer/limited/2023/PSE_Silver_Zynith.png.img.2880.png'
                
                    }
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_8.jpg.img.2880.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_6.jpg.img.2880.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_4.jpg.img.2880.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_3.jpg.img.2880.jpg',
                ]
            },
        },
        slideGallery:[
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_12.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_11.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_10.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_9.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_8.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_7.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_6.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_5.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_4.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_3.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_2.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/grand-cherokee/2023/galeria/galeria_grand_cherokee_13.jpg.img.2880.jpg'
        ],
        stock : 100
    },
    {
        id: '2',
        name : 'Jeep Compass',
        description : 'Jeep Compass 2.0 Td At9 4x4 Trailhawk',
        img : 'https://imgs.search.brave.com/BUzuAMXLQ0mk4oY6W7pQGxJ9FIFOYcNdaL91jrorU7E/rs:fit:860:0:0/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9qZWVwL2plZXBf/UE5HOTcucG5n',
        category : 'Drive',
        models :{
            1 : {
                subName: 'SPORT',
                price : 38916000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-sport-t270/2025/sport-097-2025-742-Branco-Polar-04.png.img.2880.png'
                    
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-sport-t270/2025/sport-2025-852-Preto-Carbon-04.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-sport-t270/2025/sport-2025-847-Cinza-Granite-04.png.img.2880.png'
                
                    }
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/1.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/2-new.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/compass-2025-yanta-sport.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/compass-2025-faros-full-led.jpg.img.1000.jpg',
                ]
            },
            2 : {
                subName: 'LONGITUDE',
                price : 41000000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-longitude-t270/2025/compass_2025-472-blanco-polar.png.img.2880.png'
                    
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-longitude-t270/2025/compass_2025-852-negro-carbon.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-longitude-t270/2025/compass_2025-847-gris-granito.png.img.2880.png'
                
                    }
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/longitude-t270/1-new.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/longitude-t270/2.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/longitude-t270/3.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/longitude-t270/4.jpg.img.1000.jpg',
                ]
            },
            3: {
                subName: 'LIMITED',
                price : 43500000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-limited-plus-t270/2025/compass-2025_limited-blanco-polar.jpg.img.2880.jpg'
                    
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-limited-plus-t270/2025/compass-2025_limited-negro-carbon.jpg.img.2880.jpg'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/vlp/blurb-rail/compass-limited-plus-t270/2025/compass-2025_limited-gris-granito.jpg.img.2880.jpg'
                
                    }
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/longitude-t270/1-new.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/longitude-t270/2.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/longitude-t270/3.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/longitude-t270/4.jpg.img.1000.jpg',
                ]
            }
        },
        slideGallery:[
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/compass/2025/descr-general/carrousel/compass-2025-home-carrousel3.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/compass/2025/descr-general/carrousel/compass-2025-home-carrousel2.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/compass/2025/descr-general/carrousel/compass-2025-home-carrousel1.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/compass/2025/descr-general/carrousel/compass-2025-home-carrousel4.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/compass/2025/descr-general/carrousel/compass-2025-home-carrousel5.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/compass/2025/descr-general/carrousel/compass-2025-home-carrousel6.jpg.img.2880.jpg'
        ],
        stock : 100
    },
    {
        id: '3',
        name : 'Jeep Renegade',
        description : 'Jeep RenegadeSport At Plus',
        img : 'https://imgs.search.brave.com/q-Oub14VqXOgF6sfqzbpJFwGEYroYZpM8FBG2_CgWtU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YXMuZmNhY2FuYWRh/LmNhL2plbGxpZXMv/cmVuZGl0aW9ucy8y/MDIzLzgwMHg1MTAv/Q0MyM19CVkpINzRf/MkRDX1BSWF9BUEFf/WFhYX1hYWF9YWFgu/YzAwMDk0OWFkN2Vj/Njg3Zjg5ZmE1Y2Jm/ZjVkMWJhMDIucG5n',
        category : 'Drive',
        models :{
            1 : {
                subName: 'Sport AT6',
                price : 32000000 ,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/sport-at6/Renegade_Sport_Branco_Polar-at6-modelizer-new.png.img.2880.png'
                    
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/sport-at6/Renegade_Sport_Preto_Carbon-at6-modelizer-new.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/sport-at6/Renegade_Sport_Cinza_Granite-at6-modelizer-new.png.img.2880.png'
                
                    }
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/feature-Faros-Full-Led-new2.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/feature-Volante.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/feature-Parrilla.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/feature-Tapizados.jpg.img.1000.jpg'
                ]
            },
            2: {
                subName: 'Longitude T270',
                price : 37100000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/sport-at6/Renegade_Sport_Branco_Polar-at6-modelizer-new.png.img.2880.png'
                    
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/sport-at6/Renegade_Sport_Preto_Carbon-at6-modelizer-new.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/sport-at6/Renegade_Sport_Cinza_Granite-at6-modelizer-new.png.img.2880.png'
                
                    },
                    {
                        name: 'Jazz Blue',
                        hex: "#0063DC",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2024/longitude/Longitude-Jazz-Blue.png.img.2880.png'
                    },
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/longitude/feature-motor-longitude-julio2.png.img.1000.png',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/longitude/feature-Cargador-inalambrico-1.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/longitude/feature-Instrumentos-Full-Digital7.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/longitude/feature-Central-Multimedia-1.jpg.img.1000.jpg',
                ]
            },
            3: {
                subName: 'Serie-S T270',
                price : 39500000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2024/serie-s/renegade-serie-s-01.png.img.2880.png'
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2024/serie-s/renegade-serie-s-carbon-black.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2024/serie-s/renegade-serie-s-05.png.img.2880.png'
                    },
                    {
                        name: 'Jazz Blue',
                        hex: "#0063DC",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2024/serie-s/renegade-serie-s-05.png.img.2880.png'
                    },
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/longitude/feature-motor-longitude-julio2.png.img.1000.png',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/longitude/feature-Cargador-inalambrico-1.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/longitude/feature-Instrumentos-Full-Digital7.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/features/serie-s/feature-llanta-18-serie-s.jpg.img.1000.jpg',
                ]
            }
        },
        slideGallery:[
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/desc-general/galeria/slide-1-1.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/desc-general/galeria/slide-2-1.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/desc-general/galeria/slide-3.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/desc-general/galeria/slide-4.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/desc-general/galeria/slide-5.jpg.img.2880.jpg'
        ],
        stock : 100
    },
    {
        id: '4',
        name : 'Jeep Commander',
        description : 'Jeep Commander 2.0',
        img : 'https://imgs.search.brave.com/62yAPteSPQMz9M5jwtVarr3cdpDHl9ex0ZMqIlEPljc/rs:fit:860:0:0/g:ce/aHR0cDovL2NsaXBh/cnQtbGlicmFyeS5j/b20vbmV3X2dhbGxl/cnkvMTEyLTExMjEx/MzRfaW1hZ2UtZnJl/ZXVzZS1kb3dubG9h/ZC1vZmYtcm9hZC1q/ZWVwLXBuZy10cmFu/c3BhcmVudC5wbmc',
        category : 'Drive',
        models :{
            1 : {
                subName: 'Limited T270',
                price : 55916000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/limited-td270-4x4-naftera/173_Commander_Overland_nafta_Polar_White_107.png.img.2880.png'
                    
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/limited-td270-4x4-naftera/173_Commander_Overland_nafta_Carbon_Black_852.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/limited-td270-4x4-naftera/173_Commander_Overland_nafta_Granite_Crystal_642.png.img.2880.png'
                
                    }
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/limited-t270/feature-1-commanderT270.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/limited/feature-2-new.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/limited/feature-3.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/limited-t270/feature-4-commanderT270.jpg.img.1000.jpg',
                ]
            },
            2: {
                subName: 'Limited TD380',
                price : 64100000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/limited-td380-4x4-turbo-diesel/143_Commander_Limited-Diesel_Front-Side_Polar-White_107.png.img.2880.png'
                    
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/limited-td380-4x4-turbo-diesel/143_Commander_Limited-Diesel_Front-Side_Carbon-Black_852.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/limited-td380-4x4-turbo-diesel/143_Commander_Limited-Diesel_Front-Side_Granite-Crystal_642.png.img.2880.png'
                
                    },
                    {
                        name: 'Jazz Blue',
                        hex: "#0063DC",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/limited-td380-4x4-turbo-diesel/143_Commander_Limited-Diesel_Front-Side_Jazz-Blue_752.png.img.2880.png'
                    },
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/limited/feature-1.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/limited/feature-2-new.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/limited/feature-3.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/limited/feature-4.jpg.img.1000.jpg',
                ]
            },
            3: {
                subName: 'Overland TD380',
                price : 69500000,
                colors : [
                    {
                        name: 'White Polar',
                        hex: "#ffffff",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/overland-td380-4x4-turbo-diesel/173_Commander_Overland-Diesel_Front-Side_Polar-White_107.png.img.2880.png'
                    },
                    {
                        name: 'Black',
                        hex: "#000000",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/overland-td380-4x4-turbo-diesel/173_Commander_Overland-Diesel_Front-Side_Carbon-Black_852.png.img.2880.png'
                    },
                    {
                        name: 'Granite Crystal',
                        hex: "#292929",
                        img:'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/overland-td380-4x4-turbo-diesel/173_Commander_Overland-Diesel_Front-Side_Granite-Crystal_642.png.img.2880.png'
                    },
                    {
                        name: 'Jazz Blue',
                        hex: "#0063DC",
                        img: 'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/vlp/blurb-rail/overland-td380-4x4-turbo-diesel/173_Commander_Overland-Diesel_Front-Side_Jazz-Blue_752.png.img.2880.png'
                    },
                ] ,
                feature : [
                    '1.8-liter 16V engine',
                    '4-speed automatic transmission',
                    'Standard seatbelts',
                    'Side impact airbags',
                    'Power steering',
                    'Power windows',
                    'LED headlights',
                    'Heated seats',
                    'Anti-lock braking system',
                    'Traction control',
                    'Rear-view camera'
                ],
                transmission : 'automatic',
                gallery: [
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/overland/feature-1.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/overland/feature-2-new.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/overland/feature-3.jpg.img.1000.jpg',
                    'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/features/overland/feature-4.jpg.img.1000.jpg',
                ]
            }
        },
        slideGallery:[
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/descripcion-general/galeria-home/2-new.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/descripcion-general/galeria-home/1-new.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/descripcion-general/galeria-home/3-new.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/descripcion-general/galeria-home/4.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/descripcion-general/galeria-home/5-new2.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/descripcion-general/galeria-home/6-new.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/descripcion-general/galeria-home/7-new.jpg.img.2880.jpg',
            'https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/commander/descripcion-general/galeria-home/8.jpg.img.2880.jpg' 
        ],
        stock : 100
    },
]

export const getProducts = () => {
    return products; 
  };
  