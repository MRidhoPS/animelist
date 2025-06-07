'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
const axios = require('axios');


export default function HomePage() {
    const [animeList, setAnimeList] = useState([]);


    async function fetchAnimeData() {
        console.log("Button clicked, fetchAnimeData called");
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
            setAnimeList(response.data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    }

    useEffect(() => {
        fetchAnimeData()
    }, []);

    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-3  bg-gray-800 text-center py-10 px-10'>
                {animeList.map((anime) => (
                    <div key={anime.mal_id} className="mx-3 my-3 h-[520px] relative overflow-hidden rounded-lg">
                        <Image
                            src={anime.images.jpg.image_url}
                            width={400}
                            height={520}
                            alt="animelist"
                            className="object-cover h-full w-full"
                        />
                        <div className="absolute bottom-0 w-full h-20 hover:h-40 bg-white/15 backdrop-blur-md text-white transition-all duration-300 ease-in-out p-3">
                            <h1 className="text-base font-semibold text-center">{anime.title}</h1>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}
