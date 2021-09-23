interface SessionsDataSheetProps {
  title: string;
  content: string[];
}

export const SessionsDataSheet = ({
  content,
  title,
}: SessionsDataSheetProps) => {
  return (
    <ul>
      <h3>{title}</h3>
      {content.map((item, i) => (
        <li key={item + i}>- {item}</li>
      ))}
    </ul>
  );
};
