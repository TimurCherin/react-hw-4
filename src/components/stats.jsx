const Statistics = ({ stats }) => {
    return (
        <section className="statistics">
            <h2 class="title">Upload stats</h2>
            <ul className="stat-list">
                {stats.map((stat) => (
                    <li className="percentagetem" key={stat.id}>
                        <span className="percentage">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section >
    );
};

export default Statistics;