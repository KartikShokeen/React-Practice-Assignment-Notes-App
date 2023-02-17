import "./Alert.css"

const Alert = ({ alert }) => {
  return (
    alert && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{alert}</strong>
      </div>
    )
  );
};
export default Alert;
