export const Broadcast = ({items}) => {
  return (
    <ul>
      {items.map((el, index) => {
        return (
          <li className="li" key={index}>
            <p>{el.time}</p>
            <p className="bold-text">{el.subj}</p>
            <p>{el.description}</p>
          </li>
        );
      })}
    </ul>
  );
};
