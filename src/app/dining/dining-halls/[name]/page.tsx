'use client'

import { useEffect } from 'react';

export default function BusinessReviews({ name } : { name: string}) {
    useEffect(() => { console.log("business name: " + name) }, []);

    return (
        <div>This is where {name} will have all their reviews!</div>
    );
}