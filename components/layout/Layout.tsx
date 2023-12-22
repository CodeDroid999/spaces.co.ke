// components/Navbar.tsx

import ToggleModeButton from './ToggleModeButton';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      {/* Your navbar content */}
      <div className="flex justify-between items-center">
        <div>Logo</div>
        <ToggleModeButton />
      </div>
    </nav>
  );
};

export default Navbar;
