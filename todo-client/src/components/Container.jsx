const Container = ({ children, classNames }) => {
  return (
    <div
      className={`container mx-auto mt-5 px-auto py-5 ${classNames}`}
      style={{
        background: 'var(--bs-secondary-bg)',
        borderRadius: '5px',
        marginLeft: '5px',
      }}
    >
      {children}
    </div>
  );
};
export default Container;
