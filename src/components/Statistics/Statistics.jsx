import PropTypes from 'prop-types';
//import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {

    return (
    <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            
        <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className="item"
                        key = { id }>
            <span className="label">{ label }</span>
            <span className="percentage">{ percentage }</span>
                        </li>)
                })
                }     
        </ul>
    </section>)
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
}