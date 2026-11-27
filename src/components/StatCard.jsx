function StatCard({ title, value, color }) {

    return (
        <div className="card shadow-sm h-100">

            <div className="card-body">

                <h6 className="text-muted">
                    {title}
                </h6>

                <h2 className={`text-${color}`}>
                    {value}
                </h2>

            </div>

        </div>
    );
}

export default StatCard;
