
"use client";

export default function RequestDemoLink({
  children,
  className = "",
}) {
  const handleClick = () => {
    window.dispatchEvent(new Event("open-request-demo"));
  };

  return (
    <a
      href="#request-demo"
      onClick={(event) => {
        event.preventDefault();
        handleClick();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
