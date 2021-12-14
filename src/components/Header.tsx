const MailIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    stroke="none"
    fill="currentColor"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
  </svg>
);

const Header = () => {
  return (
    <div className="bg-deep-orange">
      <div className="app-container flex items-center text-white py-4 text-lg lg:text-xl font-medium">
        <MailIcon className="h-6 w-6 mr-4" />
        <h1>Malik Cards</h1>
      </div>
    </div>
  );
};

export default Header;
