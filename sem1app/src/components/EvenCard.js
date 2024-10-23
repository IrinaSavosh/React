import "../EvenCard.css";

function EvenCard(props) {
	const propsBoolean = true;
	return (
		<div className="evenCard">
			<h2 style={{ color: propsBoolean ? "green" : "red" }}>
				<span className="evenCard_title">Группа</span>"{props.title}"
			</h2>
			<h2>
				<span className="evenCard_date">Дата: </span>
				{props.date}
			</h2>
			<h2>
				<span className="evenCard_description">Адрес: </span>
				{props.location}
			</h2>
		</div>
	);
}

export default EvenCard;
