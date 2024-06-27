interface Props {
  name?: string;
}
export const Greet = ({ name = '' }: Props) => {
  return (
    <div>Greet {name}</div>
  );
};
