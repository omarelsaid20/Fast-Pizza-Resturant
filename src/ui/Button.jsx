import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    " text-stone-200 hover:text-stone-600 text-sm inline-block rounded-full bg-cyan-600  font-semibold uppercase tracking-wide transition-colors duration-500 hover:bg-cyan-400 focus:outline-none focus:ring <focus:ring-cyan></focus:ring-cyan>-400 focus:ring-offset-1 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-3 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      " text-stone-600 text-sm hover:text-stone-500 text-stone-300 border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 inline-block rounded-full font-semibold uppercase tracking-wide transition-colors duration-500 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-1 disabled:cursor-not-allowed ",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
