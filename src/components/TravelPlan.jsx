/* eslint-disable react/prop-types */
import { useState } from 'react';
import { initialTravelPlan } from '../data/Places';

function PlaceTree({ id, placesById, onComplete, parentId }) {
    const place = placesById[id];
    const childIds = place.childIds;
    return (
        <li>
            {place.title} <button onClick={() => onComplete(parentId, id)} > Complete</button>
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => (
                        <PlaceTree
                            key={childId}
                            id={childId}
                            parentId={parentId}
                            placesById={placesById}
                            onComplete={onComplete}
                        />
                    ))}
                </ol>
            )}
        </li>
    );
}

export default function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const root = plan[0];
    const planetIds = root.childIds;
    const handleComplete = (parentId, childId) => {
        console.log('parentId ' + parentId + ' childId ' + childId);
        const parent = plan[parentId]
        const nextParent = {
            ...parent,
            childIds: parent.childIds.filter((id) => id !== childId)
        }
        setPlan({
            ...plan,
           [parentId] : nextParent,
        })
    }
    return (
        <>
            <h2>Places to visit</h2>
            <ol>
                {planetIds.map(id => (
                    <PlaceTree
                        key={id}
                        id={id}
                        placesById={plan}
                        onComplete={handleComplete}
                        parentId={0}
                    />
                ))}
            </ol>
        </>
    );
}
