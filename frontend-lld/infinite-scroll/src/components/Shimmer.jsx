const Shimmer = () => {
    return (
        Array(15).fill(0).map((n, i) => (
            <div key={i} className="p-5 m-5 border border-black rounded-lg">
                <img className="w-24 h-24" alt="loading" />
            </div>
        ))
    )
}

export default Shimmer;