export default function BusinessReviews({ name } : { name: string}) {
    console.log("business name: " + name)
    return (
        <div>This is where {name} will have all their reviews!</div>
    );
}